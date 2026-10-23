# Salt & Soul digitális vendégkalauz – termékterv és bevezetés

## 1. Ellenőrzött alapok
Három nyelv; nyolc szobanév angolul; önálló bejelentkezés 14:00–24:00; kijelentkezés 10:00; 0749 250 933; Wi-Fi; reggeli a Ciuperca Mică étteremben, csak foglalás szerint; wellness külső partnereknél, csak jogosultság esetén; napi takarítás, ágyneműcsere általában háromnaponta. A parkolási helyet és a bejutási kódot külön kommunikálják.

## 2. Legfontosabb hiányok és kérdések
**Érkezés / parkolás:** Mi a pontos utcacím és Google Maps pin? Van-e hivatalos parkolási rajz, hány hely van, ki osztja ki? Útlezáráskor milyen kerülőút vagy alternatív parkoló használható? Milyen csatornán érkezik a személyes belépési információ?

**Szoba / házirend:** Mikor zajlik a napi takarítás, be kell-e jelentkezni a vendégnek? Van-e „ne zavarjanak” opció? Van-e díja a soron kívüli ágyneműcserének? Mik a dohányzásra, háziállatokra, gyermekekre, csendes időszakra vonatkozó jóváhagyott szabályok? Mely szobák akadálymentesek?

**Étkezés / wellness:** Ki kezeli a speciális reggeli igényeket? Van-e előzetes határidő? Mi a voucher felhasználási és lemondási rendje, a SPA nyitvatartása és korhatára? Aktuálisan elérhető-e a Wellness Praid?

**Biztonság / adatvédelem:** Hol található az elsősegélydoboz és a tűzoltó készülék? Van-e hivatalos menekülési útvonal? Ki felel a vendégadatok kezeléséért? Nyilvánosan megjelenhet-e a Wi-Fi-jelszó?

**Webes bevezetés:** Milyen rendszerben működik a saltandsoul.ro (WordPress, Wix, más)? Van-e hozzáférés tárhelyhez, domain DNS-hez vagy CMS-hez? Szeretnének-e vendégspecifikus hozzáférést?

## 3. Navigáció és felhasználói út
Nyitóoldal → gyorsgombok (parkolás, érkezés, Wi-Fi, reggeli, kapcsolat) → teljes vendégút kilenc lépésben → részletes információs modulok → FAQ / vészhelyzet → távozás utáni visszajelzés. A vendég 1–2 érintéssel eléri a leggyakoribb témákat.

## 4. Funkciók: érték, költség, külső szolgáltatás
| Funkció | Hasznosság | Várható költség | Külső szolgáltatás |
|---|---|---|---|
| Mobilbarát háromnyelvű statikus oldal | Nagyon magas | 0–alacsony | Statikus tárhely |
| WhatsApp kérés előre kitöltött szöveggel | Nagyon magas | 0 | WhatsApp |
| Egyérintéses telefonhívás | Magas | 0 | Telefonhálózat |
| Google Maps útvonal | Magas | 0 | Google Maps |
| Wi-Fi másolása | Magas | 0 | Nem |
| FAQ, esős programok, házirend | Magas | 0 | Nem |
| Parkolási helyszínrajz | Magas | 0 | Hiteles rajz szükséges |
| QR-kód a publikált URL-hez | Magas | 0 | QR-kód generátor vagy saját szkript |
| Vendégspecifikus bejelentkezési adatok | Közepes–magas | Közepes | Jogosultságkezelt rendszer |
| Automatikus tartalomfrissítés / CMS | Közepes | Alacsony–közepes | CMS vagy build-rendszer |
| Akadálymentességi audit | Magas | Alacsony–közepes | Opcionális szakértő |

## 5. Szerkeszthetőség és korlát
A jelenlegi referencia működő, statikus HTML. Az `index.html` tartalmazza a megjelenített háromnyelvű szöveget és a működést; a `content/` alatti JSON fájlok szerkeszthető adatmodellek, **de a HTML még nem ezekből tölti be automatikusan az adatokat**. Éles üzemre következő fejlesztésként javasolt egyetlen tartalomforrást használó build-folyamat vagy egyszerű CMS.

## 6. Karbantartás
Az ellenőrzési mezők a `content/maintenance.json` fájlban vannak: felelős, utolsó ellenőrzés, következő ellenőrzés, lejárat, státusz. A nem jóváhagyott adatok ne kerüljenek a nyilvános HTML-be. Napi: forgalmi változások és vendégüzenetek. Havi: telefon, linkek, partnerek, ár- és szolgáltatásfeltételek. Szezonális: látnivalók, menetrendek, útlezárások. Rendkívüli: belépési rendszer, biztonság, partnerváltás.

## 7. Tesztelés és bevezetés
1. Jóváhagyni a hiányzó üzemeltetési adatokat.
2. Mindhárom nyelven ellenőrizni az összes oldalszakaszt.
3. Tesztelni 360px-es és 390px-es mobilon, nagyított betűkkel és billentyűzettel.
4. Ellenőrizni minden képet, gombot, WhatsApp-üzenetet, térképlinket, vészhelyzeti hívást.
5. Publikálni HTTPS alatt, például `saltandsoul.ro/guest-guide/` útvonalon vagy külön aldomainen.
6. QR-kódot csak a végleges címhez készíteni; próba 2–3 vendéggel.
7. Ellenőrizni, hogy sem belépési kód, sem személyes foglalási adat nem került nyilvános fájlba.

## 8. Újrafelhasználás
A `WHITE_LABEL_TEMPLATE.md` tartalmazza a cserélhető modulokat. Új szálláshelyhez külön márkakonfiguráció, fordítások, fényképek, szobák, szabályok, partnerek és programajánlók szükségesek.

## Jóváhagyott pontosítások (2026-10-22)
- Hivatalosként megadott Google Maps-helyszín: https://maps.app.goo.gl/nrSiqXES8SHTe38C9
- Napi takarítás kezdete: 10:00.
- Nem publikálandó részletek: takarítás elutasítása, soron kívüli ágyneműcsere díjazása, belső karbantartási felelős.
- Még pontosítandó üzemeltetési adat: rendezvények miatti ideiglenes útlezárás és alternatív parkolás, egyedi parkolóhelyek kiosztása, részletes házirend és akadálymentesség.
