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
    next('/dashboard');
  }
};

const notLoggedInGuard = (to, from, next) => {
  if (sessionStorage.getItem('loggedIn')) {
    next('/login');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'block',
    component: () => import('../components/BlockScreen.vue'),
    beforeEnter: notLoggedInGuard,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/Dashboard.vue'),
    beforeEnter: loggedInGuard,
  },
  /* {
    path: '/call',
    name: 'call',
    component: () => import('../components/Call.vue'),
    beforeEnter: loggedInGuard,
  }, */
  {
    path: '/browser',
    name: 'browser',
    component: () => import('../components/Browser.vue'),
    beforeEnter: loggedInGuard,
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../components/Messages.vue'),
    beforeEnter: loggedInGuard,
  },
  {
    path: '/singlemessage',
    name: 'singlemessage',
    component: () => import('../components/SingleMessage.vue'),
    beforeEnter: loggedInGuard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
