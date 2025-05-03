export interface ChaosEvent {
  id: number
  title: string
  description: string
  effect: string
  weight: number // Higher weight means more likely to appear
}

export const events: ChaosEvent[] = [
  {
    id: 1,
    title: 'Spectral Apparition',
    description: 'A ghostly figure appears, casting a chilling presence and startling a hero.',
    effect: `
      Zargon rolls a D4. Based on the result, a different hero is affected.
      1 affects the Barbarian.
      2 affects the Dwarf.
      3 affects the Elf.
      4 affects the Wizard.
      The hero affected must roll a D6 for each Mind Point they have.
      Unless they roll a 5 or 6 at least once, they take 1 damage.
    `,
    weight: 5
  },
  {
    id: 2,
    title: 'Ancient Curse',
    description: 'An ancient curse awakens in the dungeon.',
    effect: 'All heroes lose 1 Mind Point.',
    weight: 5
  }
]
