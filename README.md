# Salt & Soul – háromnyelvű digitális vendégkalauz

## Indítás
Nyissa meg az `index.html` fájlt böngészőben. A képeknek ugyanabban a mappában kell maradniuk. A webhely statikus: nem kell hozzá adatbázis vagy előfizetés.

## Szerkesztés
- A működő oldalon a fordítások és a szekciók jelenleg az `index.html` fájl JavaScript-részében vannak. A `content/translations.json` a kiegészítő vendégút és FAQ szövegeinek szerkeszthető forrásmásolata; módosítása **önmagában még nem frissíti** a publikált oldalt.
- A `content/salt-soul.json` központi üzemeltetési adatlap, de a jelenlegi HTML egyes adatokat még saját kódjában tartalmaz. Publikáláskor ezeket szinkronizálni kell. Ez az átmeneti állapot fontos korlát; később build-folyamattal vagy CMS-sel oldható meg.
- A `content/maintenance.json` az ellenőrzések nyilvántartása; a nyilvános oldal nem olvassa automatikusan.
- A képeket az `index.html` mellett kell tárolni.

## Biztonság
A kapukódot, vendégnevet, foglalási azonosítót és személyes adatot **ne** tegyen nyilvános HTML/JSON fájlba. A Wi-Fi-jelszó jelenleg nyilvános: ez csak tudatos üzemeltetői jóváhagyással javasolt.

## Publikálás
1. Tesztelje a nyelveket és a képeket mobilon.
2. Töltse fel az egész mappát HTTPS-t támogató statikus tárhelyre (pl. Cloudflare Pages vagy Netlify).
3. A `www.saltandsoul.ro` domainen ajánlott a `/guest-guide/` útvonal; ehhez a jelenlegi webhely kezelőjének hozzáférése vagy átirányítás szükséges.
4. A QR-kód a már publikált, stabil URL-re mutasson.
5. Tesztelje a WhatsApp-gombokat és a Google Maps hivatkozásokat.

## Ellenőrzési rutin
- Napi: bejelentkezési fennakadások, útlezárások, vendégüzenetek.
- Havi: elérhetőségek, reggeliidők, partner-szolgáltatások, linkek.
- Szezonális: látnivalók, menetrendek, wellness és útlezárások.
- Rendkívüli: telefonszám, belépési rendszer, biztonsági információ, partnercsere.

## Nyitott kérdések
Pontos, vendégenkénti parkolóhely-kiosztás; ünnepi/útlezárási eljárás; házirend végleges szövege; különleges reggeli igények egyeztetése; wellness partner aktuális feltételei; akadálymentes megközelítés; visszajelző felület; webhely tárhelye és kezelője.

## 2026-10-22 pontosítások
- A szálláshelyhez vezető Google Maps-linket az üzemeltető adta meg: https://maps.app.goo.gl/nrSiqXES8SHTe38C9
- A napi takarítás 10:00 órakor kezdődik.
- Az egyedi parkolóhely-kiosztás és az ideiglenes útlezárások továbbra is foglalásfüggő adatok.
- A többi megválaszolatlan kérdést nem jelenítjük meg hiányként a vendégeknek.
