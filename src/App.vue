<script setup lang="ts"></script>

<template>
  <div class="app">
    <header>
      <h1>Heroquest Enhanced</h1>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/chaos-events" class="nav-link">Chaos Events</router-link>
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
  border-bottom: 2px solid var(--border-color);
}

header h1 {
  color: var(--secondary-color);
  margin: 0;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

nav {
  margin-top: 1rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  margin-right: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.router-link-active {
  background-color: var(--primary-color);
  color: var(--text-color);
}

main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
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
