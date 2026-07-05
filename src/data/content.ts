export interface AboutSection {
  id: string
  text: string
  highlight?: boolean
}

export const aboutSections: AboutSection[] = [
  { id: 'a', text: 'Szeretettel köszöntelek!' },
  {
    id: 'b',
    text: 'Gyógypedagógiai asszisztensi végzettséggel rendelkezem, jelenleg pedig gyógypedagógia szakos egyetemi hallgatóként tanulmányaim utolsó évét végzem.',
  },
  {
    id: 'c',
    text: 'Emellett autizmussal élő gyermek édesanyja is vagyok, így nemcsak szakmai szemmel, hanem a mindennapok tapasztalatain keresztül is tudom, milyen fontos a jól megválasztott vizuális támogatás. Tudom, milyen sokat jelent, amikor egy gyermek könnyebben megérti a napirendet, ki tudja fejezni az érzéseit vagy a szükségleteit, és ezáltal nyugodtabbá, kiszámíthatóbbá válnak a mindennapok.',
  },
  {
    id: 'd',
    text: 'Ezért készítek teljesen egyedi, személyre szabott vizuális kártyákat.',
  },
  {
    id: 'e',
    text: 'A kártyák különlegessége, hogy nem csupán a gyermek saját fotóit használom fel, hanem azokat a számára ismerős tárgyakat is, amelyek a mindennapjai részét képezik: például a saját kulacsát, alvós plüssét, kedvenc játékát, táskáját, cipőjét vagy más fontos eszközeit. Az ismerős képek sok gyermek számára könnyebben értelmezhetők, így gyorsabban tudnak azonosulni velük, mint az általános rajzokkal vagy piktogramokkal.',
  },
  {
    id: 'f',
    text: 'Minden csomagot a gyermek életkorához, fejlettségi szintjéhez és a család igényeihez igazítok. Célom, hogy ne egyszerű kártyákat készítsek, hanem olyan eszközöket, amelyek valódi segítséget nyújtanak a kommunikációban, a napirend követésében, az érzelmek felismerésében és a mindennapok gördülékenyebbé tételében.',
  },
  {
    id: 'g',
    text: 'Az első család, akiknek egyedi kártyákat készítettem, arról számolt be, hogy a kártyák nagyon hasznosnak bizonyultak, és azóta is rendszeresen használják őket otthon és a mindennapok során. Ez a pozitív visszajelzés tovább erősített abban, hogy érdemes ezt a szolgáltatást minél több család számára elérhetővé tenni.',
  },
  {
    id: 'h',
    text: 'Hiszem, hogy minden gyermek egyedi. Ezért a vizuális támogatásnak is személyre szabottnak kell lennie.',
  },
  {
    id: 'extra',
    text: '✨ A szolgáltatás folyamatosan bővül új kártyákkal és segítő eszközökkel.',
    highlight: true,
  },
]

export const whyImportant = [
  {
    icon: '🧩',
    title: 'Megértés',
    text: 'Az ismerős képek segítenek a gyermeknek könnyebben értelmezni a mindennapokat.',
  },
  {
    icon: '🛡️',
    title: 'Biztonság',
    text: 'A kiszámítható vizuális rend kényelmesebbé teszi a napirendet.',
  },
  {
    icon: '☀️',
    title: 'Kevesebb feszültség',
    text: 'Ha a gyermek ki tudja fejezni az igényeit, nyugodtabbak lesznek a mindennapok.',
  },
]

export const orderSteps = [
  { icon: '💬', title: 'Írsz Messengeren', text: 'vagy kitöltöd az űrlapot' },
  { icon: '🤝', title: 'Megbeszéljük', text: 'egyedileg egyeztetünk a gyermek igényeiről' },
  { icon: '📦', title: 'Elkészítem és küldöm', text: '2–5 nap alatt, digitálisan vagy postán' },
]
