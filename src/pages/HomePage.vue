<script setup lang="ts"></script>

<template>
  <div class="home-page">
    <div class="welcome-card">
      <h1>Welcome to Heroquest Enhanced</h1>
      <p>
        Your digital enhancer for the classic board game adventure.
        <br />
        Choose a tool from below to enhance your quest!
      </p>
    </div>

    <div class="cards-grid">
      <router-link to="/chaos-events" class="feature-card">
        <div class="card-header">
          <h2>Chaos Events</h2>
          <p>Roll for unexpected events that may help or hinder your quest</p>
        </div>
      </router-link>
      <!-- More feature cards will be added here -->
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: 1rem;
}

.welcome-card {
  background-color: var(--card-background);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.welcome-card p {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 1rem auto 0;
}

.feature-card {
  background-color: var(--card-background);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;
  display: block;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.card-header {
  background-color: var(--primary-color);
  padding: 1.5rem;
}

.card-header p {
  color: var(--text-color);
  margin: 0.5rem 0 0;
  font-size: 1rem;
  opacity: 0.9;
}
</style>
