import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostFoundView from '@/views/PostFoundView.vue'
import PostLostView from '@/views/PostLostView.vue'
import BrowseView from '@/views/BrowseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/postFound',
      name: '/postFound',
      component: PostFoundView,
    },
    {
      path: '/postLost',
      name: '/postLost',
      component: PostLostView,
    },
    {
      path: '/browse',
      name: '/browse',
      component: BrowseView,
    }
  ],
})

export default router
