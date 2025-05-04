import boneCrack from '../assets/events/bone-crack.mp3'
import waaagh from '../assets/events/waaagh.mp3'
import goblinLaugh from '../assets/events/goblin-laugh.mp3'
import whisper from '../assets/events/whisper.mp3'
import heavyBreathing from '../assets/events/heavy-breathing.mp3'
import plant from '../assets/events/plant.mp3'
import bell from '../assets/events/bell.mp3'
import wind from '../assets/events/wind.mp3'
import voidAmbience from '../assets/events/void-ambience.mp3'
import evilLaugh from '../assets/events/evil-laugh.mp3'
import statue from '../assets/events/statue.mp3'
import lightning from '../assets/events/lightning.mp3'
export interface ChaosEvent {
  title: string
  description: string
  effect: string
  weight: number // Higher weight means more likely to appear
  sound?: string
}

export const events: ChaosEvent[] = [
  {
    title: 'Nothing happens',
    description: 'Lucky heroes, all seems calm.',
    effect: 'Nothing happens.',
    weight: 10
  },
  {
    title: 'Slipped on a bone',
    description: 'A hero slips on a bone and falls down.',
    effect: `
      A random hero (roll D4) must roll a combat die. If the result is a black shield,
      the hero will roll only 1 red die in their next 3 movements.
    `,
    weight: 5,
    sound: boneCrack
  },
  {
    title: 'Wandering Monster',
    description: 'The heroes are ambushed by a wandering monster.',
    effect: "Zargon places the wandering monster in the heroes' field of view.",
    weight: 4,
    sound: waaagh
  },
  {
    title: 'Goblin Thief',
    description: "A Goblin swiftly appears to steal a hero's possessions!",
    effect: `
      Zargon chooses a hero and places a Goblin near him, the Goblin steals 1 item or 50 coins from the hero.
      The hero will get the stolen items back once the Goblin is killed.
      The Goblin will flee from the dungeon in 2 Zargon's rounds if it's not killed.
    `,
    weight: 3,
    sound: goblinLaugh
  },
  {
    title: 'Spectral Apparition',
    description: 'A ghostly figure appears, casting a chilling presence and startling a hero.',
    effect: `
      A random hero (roll D4) must roll a red die for each Mind Point they have.
      Unless they roll a 5 or 6 at least once, they lose 1 Body Point.
    `,
    weight: 3,
    sound: whisper
  },
  {
    title: 'Paranoia',
    description: 'The dungeon oppresses the heroes with a feeling of dread.',
    effect:
      'Zargon rolls a D8, every hero with less Mind Points than the result will attack with one die less in their next attack.',
    weight: 3,
    sound: heavyBreathing
  },
  {
    title: 'Creeper Plant',
    description: "A creeping ivy grabs and climbs on a hero's leg, making them clumsy.",
    effect: 'A random hero (roll D4) will roll 1 defense die less in their next defense.',
    weight: 4,
    sound: plant
  },
  {
    title: 'Dark Fog',
    description: 'A thick dark fog rolls over the dungeon, reducing visibility.',
    effect: `
      Every hero attacks with one die less.
      The effect is over when a round ends in which at least 2 heroes have attacked.
    `,
    weight: 3,
    sound: bell
  },
  {
    title: 'Chaotic Influence',
    description: 'The heroes are engulfed by pure chaotic energy which temporarily changes them.',
    effect:
      'Every hero, for their next attack, will need to obtain a black shield to deal damage, instead of a skull.',
    weight: 3,
    sound: bell
  },
  {
    title: 'Wandering Patrol',
    description: 'The heroes are ambushed by a group of wandering monsters.',
    effect: "Zargon places 2 wandering monsters in the heroes' field of view.",
    weight: 2,
    sound: waaagh
  },
  {
    title: 'Cursed Wind',
    description: 'A cursed wind blows through the dungeon, hurting the heroes.',
    effect:
      'Every hero must roll a combat die. If the result is a black shield, the hero loses 1 Body Point.',
    weight: 2,
    sound: wind
  },
  {
    title: 'Darkness',
    description: 'All goes dark.',
    effect: `
      Heroes can't see monsters or objects unless they are adjacent, even diagonally.
      The effect ends when any hero sees a monster.
    `,
    weight: 2,
    sound: voidAmbience
  },
  {
    title: 'Maleficent Mirror',
    description: "A hero walk past a mirror and doesn't like what they see.",
    effect: `
      The hero with the most current Body Points loses as much Body Points as their current Mind Points,
      but will not be killed and will always remain with at least 1 Body Point left.
    `,
    weight: 1,
    sound: evilLaugh
  },
  {
    title: 'Ambushing Statue',
    description: 'A statue takes life and swings at a hero!',
    effect: `
      Zargon rolls a D4 and then attacks the hero with the most current Body Points
      with as many combat dice as the result of the D4 roll.
    `,
    weight: 1,
    sound: statue
  },
  {
    title: "Zargon's Wrath",
    description:
      'Zargon is enraged that the heroes are invading his domain, and casts a remote spell.',
    effect: 'Zargon may cast a Dread Spell against the hero with the most current Body Points.',
    weight: 0.5,
    sound: evilLaugh
  },
  {
    title: 'Impossible Lightning',
    description: 'Despite being underground, the heroes are struck by lightning!',
    effect: 'All heroes lose half of their Body Points.',
    weight: 0.5,
    sound: lightning
  }
]
