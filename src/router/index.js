import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const loggedInGuard = (to, from, next) => {
  if (sessionStorage.getItem('loggedIn')) {
    next();
  } else {
    next('/');
  }
};

const notLoggedInGuard = (to, from, next) => {
  if (sessionStorage.getItem('loggedIn')) {
    next('/dashboard');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Block',
    component: () => import('../components/Dashboard'),
    beforeEnter: notLoggedInGuard,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/Dashboard.vue'),
    beforeEnter: loggedInGuard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
