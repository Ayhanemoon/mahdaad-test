import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MyComponent from '../components/MyComponent';
import RetryRequestComponent from '../components/RetryRequestComponent';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'), // Lazy loading for the Home View
  },
  {
    path: '/my-component',
    name: 'MyComponent',
    component: MyComponent,
  },
  {
    path: '/retry-request',
    name: 'RetryRequestComponent',
    component: RetryRequestComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
