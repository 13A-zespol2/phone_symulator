import Vue from 'vue';
import Vuelidate from 'vuelidate/src';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FlashMessage from '@smartweb/vue-flash-message';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(FlashMessage);
Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
