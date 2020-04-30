import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Browse from '../views/Browse.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Browse',
    component: Browse,
  },
  {
    path: '/comics/:id',
    name: 'DetailComics',
    component: () => import('../views/DetailComics.vue'),
  },
  {
    path: '/characters/:id',
    name: 'DetailCharacters',
    component: () => import('../views/DetailCharacters.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
