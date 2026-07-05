export type Theme = 'autism' | 'light' | 'dark'

export interface Package {
  id: string
  emoji: string
  name: string
  description: string
  contents: string
  price: string
  bestseller?: boolean
  isNeedsPackage?: boolean
}

export const packages: Package[] = [
  {
    id: 'reggeli',
    emoji: '🌅',
    name: 'Reggeli rutin csomag',
    description: 'Segít elindítani a napot kiszámíthatóbban és nyugodtabban.',
    contents: 'felkelés, wc, fogmosás, öltözés, reggeli (5–6 db kártya)',
    price: '9 990 Ft',
  },
  {
    id: 'ovodai',
    emoji: '🏫',
    name: 'Óvodai napirend csomag',
    description: 'Segít az óvodai helyzetek megértésében és elfogadásában.',
    contents: 'óvodai tevékenységek, átmenetek',
    price: '12 990 Ft',
  },
  {
    id: 'esti',
    emoji: '🌙',
    name: 'Esti rutin csomag',
    description: 'Megnyugtató lezárása a napnak, segíti az elalvást.',
    contents: 'fürdés, pizsama, fogmosás, mese, alvás',
    price: '9 990 Ft',
  },
  {
    id: 'alap',
    emoji: '🧠',
    name: 'Alap szükségletek csomag',
    description: 'A legfontosabb igények jelzésére, amikor a beszéd nehéz.',
    contents: 'wc, inni, enni, fáj, segítség',
    price: '8 990 Ft',
  },
  {
    id: 'teljes',
    emoji: '⭐',
    name: 'Teljes nap csomag',
    description: 'A teljes napi rutin egyben. Különösen ajánlott kezdőknek.',
    contents: 'reggeltől estig minden benne',
    price: '17 990 – 19 990 Ft',
    bestseller: true,
  },
  {
    id: 'szukseglet',
    emoji: '🗣️',
    name: 'Szükséglet-kifejező csomag',
    description: 'Segíti a gyermek önálló kommunikációját a mindennapokban.',
    contents: 'igen/nem, kérek/nem kérem, fáj/segítség, még/kész + nyakba akasztható tartó',
    price: '10 990 Ft',
    bestseller: true,
    isNeedsPackage: true,
  },
]

export const extras = [
  { emoji: '📎', name: 'Nyakba akasztó', price: '1 000 – 1 500 Ft' },
  { emoji: '✂️', name: 'Laminálás + vágás', price: '2 000 – 3 000 Ft' },
]

export const packageOptions = [
  ...packages.map((p) => p.name),
  'Egyedi csomag',
  'Még nem tudom',
]

export const MESSENGER_URL = 'https://m.me/'
