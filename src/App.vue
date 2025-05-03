<script setup lang="ts">
import { ref } from 'vue'
import soundtrack from './assets/soundtrack.mp3'

const audio = new Audio(soundtrack)
audio.loop = true

const isAudioPlaying = ref(false)

function toggleAudio() {
  if (isAudioPlaying.value) {
    audio.pause()
  } else {
    audio.play()
  }

  isAudioPlaying.value = !isAudioPlaying.value
}
</script>

<template>
  <div class="app">
    <header>
      <h1>Heroquest Enhanced</h1>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/chaos-events" class="nav-link">Chaos Events</router-link>
        <a
          href="#"
          class="nav-link"
          :class="{ 'router-link-active': isAudioPlaying }"
          @click="toggleAudio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="500"
            height="500"
            viewBox="0 0 75 75"
          >
            <path
              d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
              style="
                stroke: currentColor;
                stroke-width: 5;
                stroke-linejoin: round;
                fill: currentColor;
              "
            />
            <path
              d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
              style="fill: none; stroke: currentColor; stroke-width: 5; stroke-linecap: round"
            />
          </svg>
        </a>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>Heroquest Enhanced - A fan made digital enhancer</p>
    </footer>
  </div>
</template>

<style>
:root {
  --primary-color: #8b0000;
  --secondary-color: #ffd700;
  --border-color: #daa520;
  --background-color: #0a0a0a;
  --card-background: #1a1a1a;
  --text-color: #ffffff;
}

body {
  margin: 0;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Cinzel', serif;
}

.app {
  height: 100svh;
  display: flex;
  flex-direction: column;
  text-align: center;
}

header {
  background-color: var(--card-background);
  padding: 1rem 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--secondary-color);
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

nav {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link svg {
  --size: 1rem;
  height: var(--size);
  width: var(--size);
}

.nav-link:hover,
.router-link-active {
  background-color: var(--primary-color);
  color: var(--text-color);
}

main {
  flex-grow: 1;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  --bg-darkness: 0.9;

  background-image:
    linear-gradient(rgba(0, 0, 0, var(--bg-darkness)), rgba(0, 0, 0, var(--bg-darkness))),
    url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

footer {
  background-color: var(--card-background);
  padding: 1rem 2rem;
  text-align: center;
  border-top: 2px solid var(--border-color);
}

footer p {
  margin: 0;
}

@media (max-width: 768px) {
  header {
    padding: 1rem;
  }

  .nav-link {
    margin-right: 0.5rem;
    padding: 0.5rem;
  }
}
</style>
