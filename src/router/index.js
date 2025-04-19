import { createRouter,createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('/src/view/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;