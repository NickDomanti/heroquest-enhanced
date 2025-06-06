<script setup lang="ts">
import { ref } from 'vue'
import type { ChaosEvent } from '../data/events'
import { events } from '../data/events'
import diceRoll1 from '../assets/dice-rolls/dice-roll-1.mp3'
import diceRoll2 from '../assets/dice-rolls/dice-roll-2.mp3'
import diceRoll3 from '../assets/dice-rolls/dice-roll-3.mp3'

const currentEvent = ref<ChaosEvent | null>(null)
const isLoading = ref(false)
const eventResultRef = ref<HTMLElement | null>(null)

let currentSoundIndex = 0
const soundFiles = [diceRoll1, diceRoll2, diceRoll3]

function playDiceSound() {
  const audio = new Audio(soundFiles[currentSoundIndex])
  audio.play()
  currentSoundIndex = (currentSoundIndex + 1) % soundFiles.length
}

async function getRandomEvent() {
  isLoading.value = true
  currentEvent.value = null

  playDiceSound()

  // Simulate a short delay for dramatic effect
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Calculate total weight
  const totalWeight = events.reduce((sum, event) => sum + event.weight, 0)

  // Generate random number between 0 and total weight
  let random = Math.random() * totalWeight

  // Find the event based on weight
  let selectedEvent = events[0]
  for (const event of new Set(events)) {
    random -= event.weight
    if (random <= 0) {
      selectedEvent = event
      break
    }
  }

  currentEvent.value = selectedEvent
  isLoading.value = false

  // Scroll to the event result after it's generated
  setTimeout(() => {
    eventResultRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 100)

  setTimeout(() => {
    if (selectedEvent.sound) {
      const audio = new Audio(selectedEvent.sound)
      audio.play()
    }
  }, 500)
}
</script>

<template>
  <div class="chaos-events-page">
    <h1>Chaos Events</h1>

    <button @click="getRandomEvent" class="event-button" :disabled="isLoading">
      {{ isLoading ? 'Rolling...' : 'Roll for Event' }}
    </button>

    <div v-if="isLoading" class="loading-wheel"></div>

    <div v-if="currentEvent && !isLoading" class="event-result" ref="eventResultRef">
      <h3>{{ currentEvent.title }}</h3>
      <p>{{ currentEvent.description }}</p>
      <div class="event-effect">
        <h4>Effect:</h4>
        <p>{{ currentEvent.effect }}</p>
      </div>
    </div>

    <p class="notes">
      <b>Notes:</b>
      <br />
      When an effect targets a random hero, Zargon must roll a D4 and use the result to count in a
      clockwise direction from themselves to determine which hero to target.
    </p>
  </div>
</template>

<style scoped>
.chaos-events-page {
  padding: 1rem;
}

h1 {
  margin-bottom: 2rem;
}

.event-button {
  background-color: var(--primary-color);
  color: var(--text-color);
  border: 2px solid var(--border-color);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Cinzel', serif;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}

@media (hover: hover) {
  .event-button:hover:not(:disabled) {
    background-color: var(--secondary-color);
    color: var(--background-color);
    transform: scale(1.05);
  }
}

.event-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-wheel {
  width: 50px;
  height: 50px;
  margin: 2rem auto;
  border: 4px solid var(--card-background);
  border-top: 4px solid var(--border-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.event-result {
  background-color: var(--card-background);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem auto 0;
  max-width: 600px;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.event-result h3 {
  color: var(--secondary-color);
  margin-top: 0;
  font-size: 1.4rem;
}

.event-result p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
}

.event-effect {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid var(--border-color);
}

.event-effect h4 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.event-effect p {
  margin: 0;
  font-style: italic;
}

.notes {
  margin-top: 2rem;
  font-size: 0.8rem;
  font-style: italic;
}
</style>
