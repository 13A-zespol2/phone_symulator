import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone, faSms, faCog, faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhone);
library.add(faSms);
library.add(faCog);
library.add(faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);

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
