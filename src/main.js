import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import {vueImgPreview} from 'vue-img-preview'

Vue.component('vue-img-preview', vueImgPreview)

Vue.config.productionTip = false

// Axios config
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// bus used to emit to the auth dialog from TheHeaderNavbar
export const bus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
