import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// Establis a connection to the wordpress REST API
// Vue.http.options.root = 'http://localhost:8888/headlessblog/wp-json';
Vue.prototype.$api = 'https://headlessblog2021.000webhostapp.com/wp-json/wp/v2/articles';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
