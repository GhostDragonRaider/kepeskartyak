export type Theme = 'autism' | 'light' | 'dark'

export interface Package {
  id: string
  emoji: string
  name: string
  description: string
  contents: string
  price: string
  bestseller?: boolean
  isCommunication?: boolean
}

export const packages: Package[] = [
  {
    id: 'reggeli',
    emoji: '🌅',
    name: 'Reggeli rutin csomag',
    description: 'Segít elindítani a napot kiszámíthatóbban és nyugodtabban.',
    contents: 'felkelés, wc, fogmosás, öltözés, reggeli (5–6 db kártya)',
    price: '5 000 – 7 000 Ft',
  },
  {
    id: 'ovodai',
    emoji: '🏫',
    name: 'Óvodai napirend csomag',
    description: 'Segít az óvodai helyzetek megértésében és elfogadásában.',
    contents: 'óvodai tevékenységek, átmenetek',
    price: '6 000 – 8 000 Ft',
  },
  {
    id: 'esti',
    emoji: '🌙',
    name: 'Esti rutin csomag',
    description: 'Megnyugtató lezárása a napnak, segíti az elalvást.',
    contents: 'fürdés, pizsama, fogmosás, mese, alvás',
    price: '5 000 – 7 000 Ft',
  },
  {
    id: 'alap',
    emoji: '🧠',
    name: 'Alap szükségletek csomag',
    description: 'A legfontosabb igények jelzésére, amikor a beszéd nehéz.',
    contents: 'wc, inni, enni, fáj, segítség',
    price: '4 000 – 6 000 Ft',
  },
  {
    id: 'teljes',
    emoji: '⭐',
    name: 'Teljes nap csomag',
    description: 'A teljes napi rutin egyben. Különösen ajánlott kezdőknek.',
    contents: 'reggeltől estig minden benne',
    price: '10 000 – 16 000 Ft',
    bestseller: true,
  },
  {
    id: 'kommunikacios',
    emoji: '🗣️',
    name: 'Kommunikációs csomag',
    description: 'Segíti a gyermek önálló kommunikációját a mindennapokban.',
    contents: 'igen/nem, kérek/nem kérem, fáj/segítség, még/kész + tépőzáras füzet + nyakba akasztható tartó',
    price: '6 000 – 10 000 Ft',
    bestseller: true,
    isCommunication: true,
  },
]

export const extras = [
  { emoji: '📒', name: 'Tépőzáras füzet', price: '2 500 – 4 000 Ft' },
  { emoji: '📎', name: 'Nyakba akasztó', price: '1 000 – 1 500 Ft' },
  { emoji: '✂️', name: 'Laminálás + vágás', price: '2 000 – 3 000 Ft' },
  { emoji: '📦', name: 'Tároló tasak / doboz', price: 'külön egyeztetés' },
]

export const packageOptions = [
  ...packages.map((p) => p.name),
  'Egyedi csomag',
  'Még nem tudom',
]

export const MESSENGER_URL = 'https://m.me/'
