# Védett belépési oldal – beüzemelés

A vendégkalauz Wi-Fi kártyájában mindhárom nyelven megjelent a **Belépési információk** gomb, amely a `/guest-access` címre vezet. Ez a cím **csak akkor működik**, ha a védett kiszolgáló is be van állítva. A GitHub Pages önmagában nem tudja biztonságosan védeni a belépési kódot.

## Javasolt üzembe helyezés

1. A domain DNS-ét Cloudflare-ben kell kezelni (a meglévő webhely átköltöztetése nem feltétlenül szükséges).
2. Cloudflare Workers: hozzon létre egy új Worker-t, és illessze be a `guest-access-worker.js` tartalmát.
3. A Worker Settings → Variables and Secrets alatt hozzon létre **három titkos változót** (Secret):
   - `ACCESS_PASSWORD`: az Ön által megadott vendégoldal-jelszó.
   - `ENTRANCE_CODE`: a főbejárat aktuális ajtókódja.
   - `SESSION_SECRET`: egy hosszú, véletlenszerű, legalább 32 karakteres titkos érték.
4. Állítsa be a Worker route-ot: `saltandsoul.ro/guest-access*` (ha a honlap `www`-vel működik, akkor a `www.saltandsoul.ro/guest-access*` route-ot is). A pontos route-beállítás a domain Cloudflare-konfigurációjától függ.
5. Tesztelje inkognitó ablakban: jelszó nélkül nem jelenhet meg az ajtókód; helyes jelszó után megjelenik. Tesztelje telefonon is, mindhárom nyelven.

**Biztonság:** az ajtókód és a hozzáférési jelszó ne szerepeljen a GitHubon, a nyilvános HTML-ben vagy a ZIP-ben. A Worker szerveroldalon ellenőrzi a jelszót, és 12 órára érvényes, aláírt HTTP-only munkamenet-cookie-t ad. A közös jelszó továbbadható; ha erősebb védelem kell, egyedi foglalási azonosítókat kell bevezetni. Érdemes Cloudflare rate limiting szabályt beállítani a jelszópróbálkozások korlátozására.

**Jelenlegi állapot:** a vendégkalauz gombja és a Worker forráskódja elkészült; a Worker még nincs telepítve a domainre, és a titkos értékek nincsenek beállítva.


## Aktuális előnézet
A `guest-access/index.html` jelenleg tájékoztató tartalékoldal, **nem kér jelszót, és nem jeleníti meg az ajtókódot**. A védett funkcióhoz telepítse a `guest-access-worker.js` Worker-t a `/guest-access*` útvonalra. Az aktiválás után a Wi-Fi-hálózat és jelszó is a védett oldalon látható. A statikus vendégkalauz Wi-Fi-kártyájában továbbra is szerepelnek ezek az adatok.
