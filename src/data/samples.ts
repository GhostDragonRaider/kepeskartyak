export interface SampleCategory {
  id: string
  label: string
  description: string
  sheetImage: string
}

export const sampleCategories: SampleCategory[] = [
  {
    id: 'napi-rutin',
    label: 'Napi rutin',
    description: 'Reggeli rutin és óvodai napirend mintakártyák – saját fotókkal, személyre szabva.',
    sheetImage: '/mintak/napi-rutin-osszes.png',
  },
  {
    id: 'szukseglet',
    label: 'Szükséglet-kifejező',
    description: 'Alapvető igények és válaszkártyák – ivás, evés, igen/nem és további kifejezések.',
    sheetImage: '/mintak/szukseglet-osszes.png',
  },
]
