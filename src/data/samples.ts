export type SampleCategoryId = 'napi-rutin' | 'szukseglet'

export interface SampleCategory {
  id: SampleCategoryId
  label: string
  description: string
  sheetImage: string
}

export interface SampleItem {
  id: string
  category: SampleCategoryId
  label: string
  image: string
}

export const sampleCategories: SampleCategory[] = [
  {
    id: 'napi-rutin',
    label: 'Napi rutin',
    description: 'Reggeli rutin és óvodai napirend mintakártyák – saját fotókkal, személyre szabva.',
    sheetImage: '/mintak/napi-rutin-osszes.jpg',
  },
  {
    id: 'szukseglet',
    label: 'Szükséglet-kifejező',
    description: 'Alapvető igények és válaszkártyák – ivás, evés, igen/nem és további kifejezések.',
    sheetImage: '/mintak/szukseglet-osszes.jpg',
  },
]

export const sampleItems: SampleItem[] = [
  { id: 'reggel-felkelek', category: 'napi-rutin', label: 'Reggel felkelek', image: '/mintak/reggel-felkelek.jpg' },
  { id: 'wc-re-megyek', category: 'napi-rutin', label: 'WC-re megyek', image: '/mintak/wc-re-megyek.jpg' },
  { id: 'fogmosas', category: 'napi-rutin', label: 'Fogmosás', image: '/mintak/fogmosas.jpg' },
  { id: 'arcmosas', category: 'napi-rutin', label: 'Arcmosás', image: '/mintak/arcmosas.jpg' },
  { id: 'oltozom', category: 'napi-rutin', label: 'Öltözöm', image: '/mintak/oltozom.jpg' },
  { id: 'reggelizes', category: 'napi-rutin', label: 'Reggelizés', image: '/mintak/reggelizes.jpg' },
  { id: 'oviba-indulas', category: 'napi-rutin', label: 'Oviba indulás', image: '/mintak/oviba-indulas.jpg' },
  { id: 'oviban-jatszom', category: 'napi-rutin', label: 'Oviban játszom', image: '/mintak/oviban-jatszom.jpg' },
  { id: 'tizorai', category: 'napi-rutin', label: 'Tízórai az oviban', image: '/mintak/tizorai.jpg' },
  { id: 'tanulas', category: 'napi-rutin', label: 'Tanulás', image: '/mintak/tanulas.jpg' },
  { id: 'jatszoter', category: 'napi-rutin', label: 'Játszótér', image: '/mintak/jatszoter.jpg' },
  { id: 'hazaindulas', category: 'napi-rutin', label: 'Hazaindulás', image: '/mintak/hazaindulas.jpg' },
  { id: 'ivas', category: 'szukseglet', label: 'Ivás', image: '/mintak/szukseglet-ivas.jpg' },
  { id: 'eves', category: 'szukseglet', label: 'Evés', image: '/mintak/szukseglet-eves.jpg' },
  { id: 'igen', category: 'szukseglet', label: 'Igen', image: '/mintak/szukseglet-igen.jpg' },
  { id: 'nem', category: 'szukseglet', label: 'Nem', image: '/mintak/szukseglet-nem.jpg' },
  { id: 'faj-a-hasam', category: 'szukseglet', label: 'Fáj a hasam', image: '/mintak/szukseglet-faj-a-hasam.jpg' },
]
