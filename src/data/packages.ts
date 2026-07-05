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
    id: 'napi-rutin',
    emoji: '🌅',
    name: 'Napi rutin (Prémium)',
    description: 'A teljes napi rutin egyben, szabálykártyákkal. Különösen ajánlott kezdőknek.',
    contents:
      'reggeli és esti rutin, öltözés, étkezés, fogmosás, játék, fürdés, alvás, óvodába/iskolába indulás, egyszerű szabálykártyák (pl. Halkan beszélek, Várok a soromra, Nem bántok másokat, Szépen kérek, Megállok, Figyelek, Elpakolok)',
    price: '17 990 – 19 990 Ft',
    bestseller: true,
  },
  {
    id: 'ovodai',
    emoji: '🏫',
    name: 'Óvodai csomag',
    description: 'Segít az óvodai helyzetek megértésében és elfogadásában.',
    contents: 'óvodai tevékenységek, átmenetek',
    price: '12 990 Ft',
  },
  {
    id: 'iskolai',
    emoji: '🎒',
    name: 'Iskolai csomag',
    description: 'Segít az iskolai helyzetek megértésében és a napirend követésében.',
    contents: 'iskolai tevékenységek, átmenetek, szünet, hazaindulás',
    price: '13 990 Ft',
  },
  {
    id: 'erzelem',
    emoji: '💛',
    name: 'Érzelemkártyák',
    description: 'Segít a gyermeknek felismerni és kifejezni az érzéseit.',
    contents: 'boldog, szomorú, dühös, fáradt, izgatott, nyugodt és további érzelmek',
    price: '9 990 Ft',
  },
  {
    id: 'szukseglet',
    emoji: '🗣️',
    name: 'Szükséglet-kifejező csomag',
    description: 'Segíti a gyermek önálló kommunikációját a mindennapokban.',
    contents: 'igen/nem, kérek/nem kérem, fáj/segítség, még/kész + nyakba akasztható tartó',
    price: '10 990 Ft',
    isNeedsPackage: true,
  },
  {
    id: 'egyedi',
    emoji: '✨',
    name: 'Teljesen egyedi csomag',
    description: 'Teljesen személyre szabott csomag a család egyedi igényei alapján.',
    contents: 'egyedi kártyák és tartalom egyeztetés után',
    price: '24 990 – 29 990 Ft',
  },
]

export const extras = [
  { emoji: '📎', name: 'Nyakba akasztó', price: '1 000 – 1 500 Ft' },
]

export const packageOptions = [
  ...packages.map((p) => p.name),
  'Még nem tudom',
]

export const MESSENGER_URL = 'https://m.me/'
