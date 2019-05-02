import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GM_API_KEY,
    libraries: 'places',
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
