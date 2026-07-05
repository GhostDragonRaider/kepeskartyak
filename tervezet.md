# Tervezet – Egyedi vizuális kártyák mini webshop

> **Státusz:** Tervezési fázis – jóváhagyásra vár  
> **Technológia:** React + TypeScript (Vite)  
> **Utolsó frissítés:** 2026. július 5.

---

## 1. Projekt célja és alapelvek

Egy letisztult, bizalmat építő mini webshop, amely **nem klasszikus webáruház**, hanem bemutatkozó oldal + csomagkatalógus + rendelési űrlap. A látogató megismeri a szolgáltatást, kiválasztja a csomagot, majd **Messengeren vagy űrlapon keresztül** rendel – **kártyás fizetés nincs**.

### Alapelvek (a képek alapján)
- Ne legyen zsúfolt – nyugodt, biztonságos, gyerekbarát hangulat
- Ne legyen „kínai mindenes bolt” – fókusz: te segítesz
- Mindenhol legyen: **„Írj Messengeren”** CTA
- Profi, de egyszerű kód

---

## 2. Három témamód

A fejlécben (jobb felső sarokban) három téma-váltó ikon/gomb:

### 2.1. Autizmus téma (alapértelmezett)
A vizuális támogatás világát tükrözi – nyugtató, kiszámítható, ismerős.

| Elem | Érték | Megjegyzés |
|------|-------|------------|
| Háttér | `#F7F7F7` (törtfehér) | Enyhe textúra: halvány puzzle-minta vagy puha hullámok (CSS, alacsony kontraszt) |
| Fő szín | `#CFE8D5` (nyugtató zöld) | Szekció-háttér váltásokhoz |
| Kiemelés / gombok | `#7FBF9E` | Lágy zöld, lekerekített gombok |
| Szöveg | `#333333` | Sötétszürke, nem fekete |
| Másodlagos | `#E8F4EC`, `#B8D4C8` | Kártyák, dobozok háttere |
| Akcentus | `#FFB347` (lágy narancs) | Csillag / bestseller jelölés |
| Puzzle ikon | `#7FBF9E` árnyalat | Szekció-címsorok mellett |

**Hangulat:** nyugodt, biztonságos, gyerekbarát. Puha árnyékok, nagy lekerekítések (16–24px), sok whitespace.

### 2.2. Világos mód (modern, letisztult)
Ugyanaz a struktúra, de **semleges, kifinomult** megjelenés – üzleti/profi profil.

| Elem | Érték |
|------|-------|
| Háttér | `#FFFFFF` |
| Szekció váltás | `#F5F5F5` |
| Fő szín | `#2D3748` (sötét szürke-kék) |
| Kiemelés / gombok | `#4A90A4` (visszafogott kékeszöld) |
| Szöveg | `#1A202C` |
| Akcentus | `#718096` |

**Hangulat:** modern, minimalista, sok fehér tér, vékony vonalak, finom hover-effektek.

### 2.3. Sötét mód (a világos mód párja)
| Elem | Érték |
|------|-------|
| Háttér | `#1A1A2E` |
| Szekció váltás | `#16213E` |
| Kártya háttér | `#0F3460` |
| Fő szín / gombok | `#7FBF9E` (zöld kiemelés megmarad) |
| Szöveg | `#E8E8E8` |
| Másodlagos szöveg | `#A0AEC0` |

**Hangulat:** kényelmes esti olvasás, alacsony fényerő, ugyanaz a struktúra.

---

## 3. Tipográfia

| Használat | Betűtípus | Méret (desktop) |
|-----------|-----------|-----------------|
| Főcím (hero) | **Montserrat** Bold | 42–48px |
| Szekció-cím | Montserrat SemiBold | 32px |
| Alcím | Montserrat Medium | 22px |
| Szöveg | **Open Sans** Regular | 16–18px, sormagasság 1.7 |
| Gombok | Montserrat Medium | 16px |

> **Fontos:** ne legyen „gyerekes betű” – attól lesz komoly és megbízható.

---

## 4. Oldalstruktúra

**Egyoldalas (single-page) fő elrendezés** görgetéses szekciókkal, fix fejléc navigációval. A menüpontok simán görgetnek a megfelelő szekcióhoz (anchor link).

### Navigáció (fix fejléc)
```
[Logó / név: „Egyedi képeskártyák”]   Főoldal | Rólam | Csomagok | Rendelés | Árak | Kapcsolat   [🎨 Téma váltó]
```

Mobilon: hamburger menü + téma váltó.

---

## 5. Szekciók részletesen

Minden szekció **teljes viewport magasságú** (min-height: 100vh), görgetéskor **beúszik** (fade-in + slide-up). Animáció: Intersection Observer + CSS transform, ~600ms ease-out. Konasoft-stílus: szekciók egymás után „lebegnek be”, finom parallax a hero képeken.

---

### 5.1. HERO – Fő rész (1. szekció)

**Elrendezés:** bal oldalt szöveg, jobb oldalt 2–3 kép a kártyákról (a `képek` mappából illusztrációként, vagy placeholder kártyafotók).

**Háttér:** Autizmus témában `#F7F7F7` + halvány zöld dekoratív elemek (puzzle darabok, SVG). Világos/sötét módban egyszerű gradient vagy tiszta háttér.

**Szöveg:**
- **Főcím:** „Segítek, hogy gyermeked könnyebben megértse a világot.”
- **Alcím:** „Egyedi képeskártyák autizmussal élő gyermekeknek, saját fotókkal és személyre szabva.”

**Gombok (CTA):**
1. **„Csomagok megtekintése”** → görget a Csomagok szekcióhoz (zöld, kitöltött)
2. **„Egyedi rendelés”** → görget a Rendelés szekcióhoz (outline gomb)

**Animáció:** szöveg balról csúszik be (300ms delay), képek jobbról (500ms delay), finom fade.

**Kép javaslat:** hero jobb oldalán 2–3 átfedő kártya-mockup (később valódi termékfotókkal cserélhető).

---

### 5.2. MIÉRT FONTOS? (2. szekció)

**Elrendezés:** 3 egyenlő oszlop (mobilon egymás alatt), ikon + cím + rövid szöveg.

| Ikon | Cím | Rövid szöveg |
|------|-----|--------------|
| 🧩 / puzzle SVG | **Megértés** | Az ismerős képek segítenek a gyermeknek könnyebben értelmezni a mindennapokat. |
| 🛡️ / pajzs SVG | **Biztonság** | A kiszámítható vizuális rend kényelmesebbé teszi a napirendet. |
| ☀️ / nap SVG | **Kevesebb feszültség** | Ha a gyermek ki tudja fejezni az igényeit, nyugodtabbak lesznek a mindennapok. |

**Háttér:** `#CFE8D5` halvány (autizmus téma) / `#F5F5F5` (világos) / sötét szekció-háttér.

**Animáció:** mindhárom blokk egymás után, 150ms késleltetéssel úszik be alulról.

---

### 5.3. CSOMAGOK – Termékkatalógus (3. szekció)

**Elrendezés:** 6 kártya **3×2 grid** (mobilon 1 oszlop, tablet 2 oszlop).

Minden kártya tartalmaz:
- Emoji/ikon (🌅 🏫 🌙 🧠 ⭐ 🗣️)
- Csomag neve
- Rövid leírás (1–2 mondat)
- Irányár (tájékoztató)
- **„Tovább”** gomb → modal vagy aloldal részletekkel
- Bestseller csillag (⭐) a Teljes nap és Kommunikációs csomagnál

#### A 6 csomag

| # | Név | Leírás | Tartalom | Irányár |
|---|-----|--------|----------|---------|
| 1 | **Reggeli rutin csomag** 🌅 | Segít elindítani a napot kiszámíthatóbban és nyugodtabban. | felkelés, wc, fogmosás, öltözés, reggeli (5–6 db kártya) | 5 000 – 7 000 Ft |
| 2 | **Óvodai napirend csomag** 🏫 | Segít az óvodai helyzetek megértésében és elfogadásában. | óvodai tevékenységek, átmenetek | 6 000 – 8 000 Ft |
| 3 | **Esti rutin csomag** 🌙 | Megnyugtató lezárása a napnak, segíti az elalvást. | fürdés, pizsama, fogmosás, mese, alvás | 5 000 – 7 000 Ft |
| 4 | **Alap szükségletek csomag** 🧠 | A legfontosabb igények jelzésére, amikor a beszéd nehéz. | wc, inni, enni, fáj, segítség | 4 000 – 6 000 Ft |
| 5 | **Teljes nap csomag** ⭐ BESTSELLER | A teljes napi rutin egyben. Különösen ajánlott kezdőknek. | reggeltől estig minden benne | 10 000 – 16 000 Ft |
| 6 | **Kommunikációs csomag** ⭐ | Segíti a gyermek önálló kommunikációját. | igen/nem, kérek/nem kérem, fáj/segítség, még/kész + tépőzáras füzet + nyakba akasztható tartó | 6 000 – 10 000 Ft |

**Rutin csomagoknál (1–5):**
- Tartalom: kártyák + (opcionálisan) egyszerű tároló tasak
- **Nincs benne:** füzet, nyakba akasztó
- Minden csomagnál: „+ kérhető hozzá: 📒 tépőzáras füzet, 📎 nyakba akasztható tartó”

**Kommunikációs csomagnál (6):**
- Komplett rendszer: kártyák + tépőzáras füzet + nyakba akasztható tartó

**Kártya design:** fehér/krémszínű háttér, lekerekített sarkok, finom árnyék, puzzle ikon a sarokban.

**Animáció:** kártyák egymás után scale-in (0.95 → 1.0) + fade, görgetéskor.

---

### 5.4. EXTRÁK – Külön megvehető kiegészítők (3. szekció alatti alcikk vagy külön sor)

4 kis kártya egy sorban:

| Extra | Ár |
|-------|-----|
| 📒 Tépőzáras füzet | 2 500 – 4 000 Ft |
| 📎 Nyakba akasztó | 1 000 – 1 500 Ft |
| ✂️ Laminálás + vágás | 2 000 – 3 000 Ft |
| 📦 Tároló tasak / doboz | külön egyeztetés |

> „Sokan csak ezt kérik majd!” – kis infó szöveg alatta.

---

### 5.5. BEMUTATKOZÁS – Rólam (4. szekció)

**Elrendezés:** bal oldalt kép (Szilvi portré / családi fotó placeholder), jobb oldalt szöveg, szekciókra osztva. Görgetéskor a szövegrészek **egymás után jelennek meg** (WordPress-szerű beúszás).

#### Szövegrészek (a prompt.md-ből, szekciókra bontva):

**Szekció A – Köszöntés**
> Szeretettel köszöntelek!

**Szekció B – Szakmai háttér**
> Gyógypedagógiai asszisztensi végzettséggel rendelkezem, jelenleg pedig gyógypedagógia szakos egyetemi hallgatóként tanulmányaim utolsó évét végzem.

**Szekció C – Szülői tapasztalat**
> Emellett autizmussal élő gyermek édesanyja is vagyok, így nemcsak szakmai szemmel, hanem a mindennapok tapasztalatain keresztül is tudom, milyen fontos a jól megválasztott vizuális támogatás. Tudom, milyen sokat jelent, amikor egy gyermek könnyebben megérti a napirendet, ki tudja fejezni az érzéseit vagy a szükségleteit, és ezáltal nyugodtabbá, kiszámíthatóbbá válnak a mindennapok.

**Szekció D – Egyedi kártyák**
> Ezért készítek teljesen egyedi, személyre szabott vizuális kártyákat.

**Szekció E – A különlegesség**
> A kártyák különlegessége, hogy nem csupán a gyermek saját fotóit használom fel, hanem azokat a számára ismerős tárgyakat is, amelyek a mindennapjai részét képezik: például a saját kulacsát, alvós plüssét, kedvenc játékát, táskáját, cipőjét vagy más fontos eszközeit. Az ismerős képek sok gyermek számára könnyebben értelmezhetők, így gyorsabban tudnak azonosulni velük, mint az általános rajzokkal vagy piktogramokkal.

**Szekció F – Személyre szabás**
> Minden csomagot a gyermek életkorához, fejlettségi szintjéhez és a család igényeihez igazítok. Célom, hogy ne egyszerű kártyákat készítsek, hanem olyan eszközöket, amelyek valódi segítséget nyújtanak a kommunikációban, a napirend követésében, az érzelmek felismerésében és a mindennapok gördülékenyebbé tételében.

**Szekció G – Visszajelzés**
> Az első család, akiknek egyedi kártyákat készítettem, arról számolt be, hogy a kártyák nagyon hasznosnak bizonyultak, és azóta is rendszeresen használják őket otthon és a mindennapok során. Ez a pozitív visszajelzés tovább erősített abban, hogy érdemes ezt a szolgáltatást minél több család számára elérhetővé tenni.

**Szekció H – Záró gondolat**
> Hiszem, hogy minden gyermek egyedi. Ezért a vizuális támogatásnak is személyre szabottnak kell lennie.

**Extra szöveg (a képek alapján, bemutatkozás végére):**
> ✨ A szolgáltatás folyamatosan bővül új kártyákkal és segítő eszközökkel.

**Animáció:** minden szövegszekció külön „blokk”, görgetéskor balról/jobbról váltakozva csúszik be (fade + translateX).

**Háttér:** fehér / enyhe bézs (`#FAFAF8`).

---

### 5.6. HOGYAN RENDELJ? (5. szekció)

**Elrendezés:** középre igazított, 3 lépés vízszintesen (mobilon függőlegesen), számozott körök + ikon + szöveg.

| Lépés | Ikon | Szöveg |
|-------|------|--------|
| 1 | 💬 | **Írsz Messengeren** – vagy kitöltöd az űrlapot |
| 2 | 🤝 | **Megbeszéljük** – egyedileg egyeztetünk a gyermek igényeiről |
| 3 | 📦 | **Elkészítem és küldöm** – 2–5 nap alatt, digitálisan vagy postán |

**Háttér:** `#CFE8D5` halvány (autizmus) / alternáló szekció szín.

**Animáció:** lépések sorban jelennek meg, között finom vonal/nyíl animáció.

---

### 5.7. EGYEDI RENDELÉS (6. szekció)

**Elrendezés:** két oszlop – bal: magyarázó szöveg, jobb: rendelési űrlap.

**Szöveg:**
> Minden kártya egyedileg készül a gyermekedről készült fotók alapján. Így a kártyák sokkal érthetőbbek és könnyebben elfogadottak lesznek számára.

**Űrlap mezők:**
1. **Név** (szülő neve)
2. **Email** vagy **Telefon**
3. **Gyermek kora**
4. **Csomag választás** (legördülő: a 6 csomag + „Egyedi csomag” + „Még nem tudom”)
5. **Kép feltöltés** (drag & drop zóna, max 10 kép, JPG/PNG)
6. **Igények leírása** (textarea)
7. **Extrák** (checkbox: tépőzáras füzet, nyakba akasztó, laminálás, tároló)
8. **Küldés gomb:** „Rendelés elküldése”

**Működés:** az űrlap adatai emailben kerülnek elküldésre (mailto: link vagy egyszerű backend nélküli megoldás: adatok összefoglalása + „Küldés Messengeren” gomb, amely előre kitöltött szöveggel nyitja meg a Messenger linket).

> **Nincs kártyás fizetés** – a rendelés = kapcsolatfelvétel + egyeztetés.

---

### 5.8. ÁRAK + INFO (7. szekció)

**Elrendezés:** egy kiemelt dobozban (card), középre igazítva.

**Tartalom:**

```
💰 Árak (irányárak)

A kártyák egyedileg készülnek, az ár a darabszámtól és igényektől függ.
Az alábbiak tájékoztató árak:

🧩 Egyedi kártya .......................... 800 – 1 200 Ft / db

📦 Csomagok:
   🌅 Reggeli rutin csomag (5–6 db) ........ 5 000 – 7 000 Ft
   🏫 Óvodai csomag ........................ 6 000 – 8 000 Ft
   🌙 Esti rutin csomag .................... 5 000 – 7 000 Ft
   🧠 Alap szükségletek .................... 4 000 – 6 000 Ft
   ⭐ Teljes nap csomag ..................... 10 000 – 16 000 Ft
   🗣️ Kommunikációs csomag ................ 6 000 – 10 000 Ft

+ Extrák:
   📒 Tépőzáras füzet ...................... 2 500 – 4 000 Ft
   📎 Nyakba akasztó ....................... 1 000 – 1 500 Ft
   ✂️ Laminálás + vágás .................... 2 000 – 3 000 Ft
   📦 Posta ................................ külön

⏱️ Elkészítési idő: 2–5 nap
📦 Átvétel: digitálisan (PDF) vagy postai úton, nyomtatva és laminálva

Pontos árat egyeztetés után adok meg.
```

**Design:** fehér doboz, finom zöld keret, enyhe box-shadow.

---

### 5.9. KAPCSOLAT (8. szekció / lábléc)

**Elrendezés:** középre igazított, nagy Messenger gomb + opcionális email.

**Tartalom:**
- **Nagy Messenger gomb** (kiemelt, `#0084FF` kék vagy zöld)
- Szöveg: „A rendelésekkel és kérdésekkel kapcsolatban Messengeren tudunk egyeztetni.”
- Link placeholder: `[Messenger oldal linkje]`
- Email (opcionális): `info@...`
- Záró szöveg: „Minden rendelést egyedileg beszélünk át, hogy a lehető legjobban a gyermek igényeihez igazodjon.”

**Lábléc:**
- © 2026 Egyedi vizuális kártyák
- „Készítve szeretettel ❤️”

---

## 6. Görgetési animációk (scroll reveal)

**Technika:** Intersection Observer API + CSS `transform` / `opacity` osztályok.

| Animáció típus | Hol | Effekt |
|----------------|-----|--------|
| `fade-up` | Szövegblokkok, kártyák | opacity 0→1, translateY(40px→0) |
| `fade-left` | Bemutatkozás szekciók (páratlan) | translateX(-60px→0) |
| `fade-right` | Bemutatkozás szekciók (páros) | translateX(60px→0) |
| `scale-in` | Csomag kártyák | scale(0.9→1) |
| `stagger` | 3 ikon blokk, 3 lépés | egymás után 150ms delay |
| Parallax | Hero képek | enyhe Y eltolás görgetéskor |

**Viselkedés:**
- Animáció egyszer fut le (nem ismétlődik visszagörgetéskor)
- `prefers-reduced-motion: reduce` esetén animáció kikapcsolva
- Szekciók között sima scroll-snap **NEM** (természetes görgetés marad)

---

## 7. Reszponzív töréspontok

| Eszköz | Szélesség | Változások |
|--------|-----------|------------|
| Mobil | < 768px | 1 oszlop, hamburger menü, kisebb hero szöveg (28px) |
| Tablet | 768–1024px | 2 oszlop grid csomagoknál |
| Desktop | > 1024px | teljes elrendezés, max-width: 1200px, középre igazítva |

---

## 8. Technikai felépítés (React + TypeScript)

```
src/
├── main.tsx
├── App.tsx
├── index.css              # CSS változók (témák)
├── themes/
│   ├── autism.css
│   ├── light.css
│   └── dark.css
├── components/
│   ├── Header.tsx         # Fix nav + téma váltó
│   ├── Hero.tsx
│   ├── WhyImportant.tsx
│   ├── Packages.tsx       # 6 csomag grid
│   ├── Extras.tsx
│   ├── About.tsx          # Bemutatkozás szekciók
│   ├── HowToOrder.tsx
│   ├── OrderForm.tsx      # Egyedi rendelés űrlap
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeSwitcher.tsx
│   ├── ScrollReveal.tsx   # Intersection Observer wrapper
│   └── PackageModal.tsx   # Csomag részletek
├── data/
│   ├── packages.ts        # Csomag adatok
│   ├── pricing.ts         # Árak
│   └── aboutSections.ts   # Bemutatkozás szövegek
├── hooks/
│   ├── useTheme.ts
│   └── useScrollReveal.ts
└── assets/
    └── images/            # képek mappából másolva
```

**Függőségek (minimális):**
- `react` + `react-dom`
- `typescript`
- `vite` (build tool)
- Nincs UI library (saját CSS) – egyszerű kód elv
- Nincs backend – rendelés: mailto / Messenger link

---

## 9. Képhasználat

A `képek/` mappában 37 PNG fájl található – ezek főleg **ChatGPT-ből származó tervezési jegyzetek** (szöveges screenshotok), nem termékfotók. Felhasználás:

| Cél | Megoldás |
|-----|----------|
| Hero kártya képek | Placeholder illusztrációk / SVG kártya mockupok (amíg nincs valódi fotó) |
| Bemutatkozás portré | Placeholder kép (később cserélhető) |
| Csomag kártya képek | Emoji + színkódolt háttér (egyszerű, tiszta) |
| Design referencia | A képek színei, szövegei, struktúrája beépítve ebbe a tervbe |

> **Megjegyzés:** Ha később valódi termékfotók érkeznek, azok könnyen becserélhetők az `assets/images/` mappában.

---

## 10. Jövőbeli bővítési lehetőségek (NEM az első verzióban)

A képek alapján később hozzáadható:
- **GYIK** oldal (mennyi idő, milyen fotók, lamináltak-e, vízállók-e)
- **Referenciák** / visszajelzések szekció
- **Nyomtatható (digitális) PDF csomagok** – olcsóbb opció
- Prémium csomagok (Napi rutin Prémium 17 990 Ft, Óvodai 12 990 Ft stb.) – a 36–37. képen szereplő árak
- Külön „Csomagok” aloldal

---

## 11. Összefoglaló – mit fogsz látni

```
┌─────────────────────────────────────────────────┐
│  [LOGÓ]              NAV          [🎨 Témaváltó] │  ← fix fejléc
├─────────────────────────────────────────────────┤
│                                                 │
│  HERO: „Segítek, hogy gyermeked..."              │  ← beúszás
│  [Csomagok] [Egyedi rendelés]     [kártya képek]│
│                                                 │
├─────────────────────────────────────────────────┤
│  MIÉRT FONTOS? | Megértés | Biztonság | Feszültség│  ← 3 blokk stagger
├─────────────────────────────────────────────────┤
│  CSOMAGOK (6 kártya grid)                        │  ← scale-in
│  + EXTRÁK (4 kis kártya)                        │
├─────────────────────────────────────────────────┤
│  BEMUTATKOZÁS (8 szövegszekció, váltakozó)       │  ← fade left/right
│  [kép]  Szöveg...                               │
├─────────────────────────────────────────────────┤
│  HOGYAN RENDELJ?  1 → 2 → 3                     │  ← stagger
├─────────────────────────────────────────────────┤
│  EGYEDI RENDELÉS (űrlap + képfeltöltés)          │
├─────────────────────────────────────────────────┤
│  ÁRAK (dobozban, irányárak)                      │
├─────────────────────────────────────────────────┤
│  KAPCSOLAT [Messenger gomb]                      │
│  © 2026                                         │
└─────────────────────────────────────────────────┘
```

---

## 12. Következő lépés

**Téged várunk:** nézd át ezt a tervet, és ha minden rendben, írd: **„rendben mehet a készítés”** – és elkészítjük a React + TypeScript webshopot ezen terv alapján.

Kérdezhetsz módosításokat is:
- színek, elrendezés, szövegek
- csomagok, árak
- animációk erőssége
- extra szekciók (GYIK, referenciák)
