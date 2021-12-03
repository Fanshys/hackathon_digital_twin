import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthPage from '../views/AuthPage/AuthPage.vue';
import authChecker from './routeHandler';
import HomePage from "../views/HomePage/HomePage";
import UiPage from "../views/UiPage/UiPage";

Vue.use(VueRouter);

// default layout: MainLayout
const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthPage,
    meta: {
      layout: 'EmptyLayout',
    },
  },

  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      layout: 'EmptyLayout',
    },
  },

  {
    path: '/ui',
    name: 'ui',
    component: UiPage,
    meta: {
      layout: 'EmptyLayout',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  authChecker(to, from, next);
});

export default router;
