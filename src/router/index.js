import { createRouter, createWebHistory } from 'vue-router'
import ToggleViewA from '../views/ToggleViewA.vue'
import CompuView from '@/views/CompuView.vue'
import MethodHandleView from '@/views/MethodHandleView.vue'
import LifeCycleHook from '../views/LifeCycleHook.vue'

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
    },
    {
      path: '/method',
      name: 'method',
      component: MethodHandleView
    },
    {
      path: '/hook',
      name: 'hook',
      component: LifeCycleHook
    }
  ]
})

export default router
