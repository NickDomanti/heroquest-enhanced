export interface ChaosEvent {
  id: number
  title: string
  description: string
  effect: string
}

export const events: ChaosEvent[] = [
  {
    id: 1,
    title: 'The Dark Portal',
    description: 'A mysterious portal appears, swirling with dark energy.',
    effect: 'All heroes must roll a die. On a 1-3, they take 1 damage.'
  },
  {
    id: 2,
    title: 'Ancient Curse',
    description: 'An ancient curse awakens in the dungeon.',
    effect: 'All heroes lose 1 Mind Point.'
  },
  {
    id: 3,
    title: 'Treasure Hoard',
    description: 'A hidden treasure chest is discovered!',
    effect: 'Each hero may draw one treasure card.'
  },
  {
    id: 4,
    title: 'Trap Room',
    description: 'The floor gives way beneath your feet!',
    effect: 'All heroes must roll a die. On a 1-2, they fall and take 1 damage.'
  }
]
