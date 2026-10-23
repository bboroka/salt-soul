# Salt & Soul – keresőmotoros indexelés tiltása

Az index.html `<head>` részében a `robots` és `googlebot` meta tagek `noindex, nofollow, noarchive` értékkel szerepelnek. A GitHub Actions kézi publikálási workflow eltávolítva.

GitHub Pages beállítás: Settings → Pages → Build and deployment → Source: Deploy from a branch; branch: main; folder: /(root).

A noindex nem hozzáférés-védelem. Bárki megnyithatja az oldalt a linkkel, és a GitHub repository forrása is hozzáférhető lehet. A keresőmotoroknak időbe telhet az eltávolítás; a noindex betartása a keresőtől függ. Ne használjon robots.txt Disallow szabályt, amely megakadályozná a keresőt a noindex meta tag olvasásában.
