export interface ChaosEvent {
  title: string
  description: string
  effect: string
  weight: number // Higher weight means more likely to appear
}

export const events: ChaosEvent[] = [
  {
    title: 'Nothing happens',
    description: 'Lucky heroes, all seems calm.',
    effect: 'Nothing happens.',
    weight: 25
  },
  {
    title: 'Slipped on a bone',
    description: 'A hero slips on a bone and falls down.',
    effect: `
      A random hero (roll D4) must roll a combat die. If the result is a black shield,
      the hero will roll only 1 red die in their next 3 movements.
    `,
    weight: 5
  },
  {
    title: 'Wandering Monster',
    description: 'The heroes are ambushed by a wandering monster.',
    effect: "Zargon places the wandering monster in the heroes' field of view.",
    weight: 4
  },
  {
    title: 'Goblin Thief',
    description: "A Goblin swiftly appears to steal a hero's possessions!",
    effect: `
      Zargon chooses a hero and places a Goblin near him, the Goblin steals 1 item or 50 coins from the hero.
      The hero will get the stolen items back once the Goblin is killed.
      The Goblin will flee from the dungeon in 2 Zargon's rounds if it's not killed.
    `,
    weight: 3
  },
  {
    title: 'Spectral Apparition',
    description: 'A ghostly figure appears, casting a chilling presence and startling a hero.',
    effect: `
      A random hero (roll D4) must roll a red die for each Mind Point they have.
      Unless they roll a 5 or 6 at least once, they lose 1 Body Point.
    `,
    weight: 3
  },
  {
    title: 'Paranoia',
    description: 'The dungeon oppresses the heroes with a feeling of dread.',
    effect:
      'Zargon rolls a D8, every hero with less Mind Points than the result will attack with one die less in their next attack.',
    weight: 3
  },
  {
    title: 'Creeper Plant',
    description: "A creeping ivy grabs and climbs on a hero's leg, making them clumsy.",
    effect: 'A random hero (roll D4) will roll 1 defense die less in their next defense.',
    weight: 4
  },
  {
    title: 'Dark Fog',
    description: 'A thick dark fog rolls over the dungeon, reducing visibility.',
    effect: `
      Every hero attacks with one die less.
      The effect is over when a round ends in which at least 2 heroes have attacked.
    `,
    weight: 3
  },
  {
    title: 'Chaotic Influence',
    description: 'The heroes are engulfed by pure chaotic energy which temporarily changes them.',
    effect: 'Every hero has their combat and defense dice swapped until they attack once.',
    weight: 3
  },
  {
    title: 'Wandering Patrol',
    description: 'The heroes are ambushed by a group of wandering monsters.',
    effect: "Zargon places 2 wandering monsters in the heroes' field of view.",
    weight: 2
  },
  {
    title: 'Cursed Wind',
    description: 'A cursed wind blows through the dungeon, hurting the heroes.',
    effect:
      'Every hero must roll a combat die. If the result is a black shield, the hero loses 1 Body Point.',
    weight: 2
  },
  {
    title: 'Darkness',
    description: 'All goes dark.',
    effect: `
      Heroes can't see monsters or objects unless they are adjacent, even diagonally.
      The effect ends when any hero sees a monster.
    `,
    weight: 2
  },
  {
    title: 'Maleficent Mirror',
    description: "A hero walk past a mirror and doesn't like what they see.",
    effect: `
      The hero with the most current Body Points loses as much Body Points as their current Mind Points,
      but will not be killed and will always remain with at least 1 Body Point left.
    `,
    weight: 1
  },
  {
    title: 'Ambushing Statue',
    description: 'A statue takes life and swings at a hero!',
    effect: `
      Zargon rolls a D4 and then attacks the hero with the most current Body Points
      with as many combat dice as the result of the D4 roll.
    `,
    weight: 1
  },
  {
    title: "Zargon's Wrath",
    description:
      'Zargon is enraged that the heroes are invading his domain, and casts a remote spell.',
    effect: 'Zargon may cast a Dread Spell against the hero with the most current Body Points.',
    weight: 0.1
  },
  {
    title: 'Impossible Lightning',
    description: 'Despite being underground, the heroes are struck by lightning!',
    effect: 'All heroes lose half of their Body Points.',
    weight: 0.1
  }
]
