/** Cloudflare Worker: assign route saltandsoul.ro/guest-access*.
 * Configure encrypted secrets: ACCESS_PASSWORD, ENTRANCE_CODE, SESSION_SECRET.
 * NEVER put these values in this file or the public GitHub repository.
 */
const enc = new TextEncoder();
const safe = (x) => String(x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels = {
 ro:{title:'Informații de acces',intro:'Această pagină este destinată oaspeților Salt & Soul.',password:'Parola de acces',submit:'Continuați',wrong:'Parolă incorectă. Încercați din nou.',door:'Codul ușii de la intrarea principală',wifi:'Rețea Wi-Fi',wifiPass:'Parola Wi-Fi',back:'Înapoi la ghidul oaspeților'},
 hu:{title:'Belépési információk',intro:'Ez az oldal a Salt & Soul vendégei számára készült.',password:'Hozzáférési jelszó',submit:'Belépés',wrong:'Hibás jelszó. Próbálja újra.',door:'A főépület bejárati ajtajának kódja',wifi:'Wi-Fi-hálózat',wifiPass:'Wi-Fi-jelszó',back:'Vissza a vendégkalauzhoz'},
 en:{title:'Entrance information',intro:'This page is intended for Salt & Soul guests.',password:'Access password',submit:'Continue',wrong:'Incorrect password. Please try again.',door:'Main building entrance code',wifi:'Wi-Fi network',wifiPass:'Wi-Fi password',back:'Back to the guest guide'}
};
const b64url = bytes => btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
async function sign(secret, payload) {
 const key = await crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 return b64url(await crypto.subtle.sign('HMAC',key,enc.encode(payload)));
}
async function authenticated(request, env) {
 const token = /(?:^|;\s*)ss_guest=([^;]+)/.exec(request.headers.get('Cookie')||'')?.[1];
 if (!token) return false;
 const [expiry, signature] = token.split('.');
 if (!/^\d+$/.test(expiry)||Number(expiry)<Date.now()||!signature) return false;
 return signature === await sign(env.SESSION_SECRET,expiry);
}
function page(lang, code, error=false, envWifi="") {
 const t=labels[lang];
 return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive"><title>${t.title} | Salt & Soul</title><style>*{box-sizing:border-box}body{margin:0;background:#faf8f3;color:#233b32;font:17px/1.65 system-ui,sans-serif;min-height:100vh;display:grid;place-items:center;padding:22px}.card{background:white;border:1px solid #dce2d9;border-radius:22px;max-width:480px;width:100%;padding:clamp(24px,6vw,44px)}h1{font:normal 34px Georgia,serif;margin:0 0 14px}p{margin:0 0 20px}label{display:block;margin-bottom:7px}input{width:100%;font:inherit;padding:13px;border:1px solid #b7c5bc;border-radius:10px;margin-bottom:14px}button{font:inherit;background:#233b32;color:white;border:0;border-radius:10px;padding:13px 23px;cursor:pointer}a{color:#233b32}.code{font-size:34px;font-weight:700;letter-spacing:2px;background:#e8eee8;border-radius:12px;padding:12px 18px;display:inline-block}.error{color:#a33232}</style></head><body><main class="card"><p style="font-size:13px;letter-spacing:.12em">SALT & SOUL · SOVATA</p><h1>${t.title}</h1><p>${t.intro}</p>${code ? `<p>${t.door}</p><p class="code">${safe(code)}</p><p>${t.wifi}: <strong>Salt&amp;Soul</strong><br>${t.wifiPass}: <strong>${safe(envWifi)}</strong></p>` : `<form method="POST"><input type="hidden" name="lang" value="${lang}"><label for="password">${t.password}</label><input id="password" name="password" type="password" required autocomplete="off"><button type="submit">${t.submit}</button></form>${error?`<p class="error">${t.wrong}</p>`:''}`}<p style="margin-top:26px"><a href="/">← ${t.back}</a></p></main></body></html>`;
}
function response(html, status=200, cookie=null){const h={'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store, private','X-Robots-Tag':'noindex, nofollow','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'"};if(cookie)h['Set-Cookie']=cookie;return new Response(html,{status,headers:h});}
export default {async fetch(request,env){
 if(!env.ACCESS_PASSWORD||!env.ENTRANCE_CODE||!env.SESSION_SECRET)return new Response('Server configuration incomplete',{status:503});
 const url=new URL(request.url);const lang=['ro','hu','en'].includes(url.searchParams.get('lang'))?url.searchParams.get('lang'):'ro';
 if(request.method==='POST'){
  const form=await request.formData();const chosen=['ro','hu','en'].includes(form.get('lang'))?form.get('lang'):'ro';
  if(String(form.get('password')||'')!==env.ACCESS_PASSWORD)return response(page(chosen,null,true),401);
  const expiry=String(Date.now()+12*60*60*1000);const signature=await sign(env.SESSION_SECRET,expiry);
  return new Response(null,{status:303,headers:{Location:`${url.origin}/guest-access?lang=${chosen}`,"Set-Cookie":`ss_guest=${expiry}.${signature}; Path=/guest-access; HttpOnly; Secure; SameSite=Strict; Max-Age=43200`,"Cache-Control":"no-store"}});
 }
 if(await authenticated(request,env))return response(page(lang,env.ENTRANCE_CODE,false,env.WIFI_PASSWORD||"salt2025"));
 return response(page(lang,null));
}};
