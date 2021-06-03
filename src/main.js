import Vue from 'vue';
import Vuelidate from 'vuelidate/src';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
