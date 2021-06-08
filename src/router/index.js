import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone, faSms, faCog, faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BlockScreen from '../components/BlockScreen.vue';
import Messages from '../components/Messages.vue';
import Dashboard from '../components/Dashboard.vue';
import SingleMessage from '../components/SingleMessage.vue';

library.add(faPhone);
library.add(faSms);
library.add(faCog);
library.add(faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('blockscreen', BlockScreen);
Vue.component('messages', Messages);
Vue.component('dashboard', Dashboard);
Vue.component('singlemessage', SingleMessage);

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
  }, */
  {
    path: '/browser',
    name: 'browser',
    component: () => import('../components/Browser.vue'),
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../components/Messages.vue'),
  },
  {
    path: '/singlemessage',
    name: 'singlemessage',
    component: () => import('../components/SingleMessage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
