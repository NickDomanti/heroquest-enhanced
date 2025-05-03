import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ChaosEventsPage from '../pages/ChaosEventsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/chaos-events',
      name: 'chaos-events',
      component: ChaosEventsPage
    }
  ]
})

export default router
