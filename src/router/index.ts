import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Simulate the "scroll to anchor" behavior
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 20 // 20px below the element
      };
    } else {
      // Back to top when clicking link to same page
      return {
        top: 0,
        behavior: 'smooth'
      };
    }
  }
});

export default router;
