import { createRouter, createWebHistory } from 'vue-router'
import ToggleViewA from '../views/ToggleViewA.vue'
import CompuView from '@/views/CompuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/toggle',
      name: 'toggle',
      component: ToggleViewA
    },
    {
      path: '/compute',
      name: 'compute',
      component: CompuView
    }
  ]
})

export default router
