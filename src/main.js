import router from './router'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './assets/gloable.css';
import axios from "axios";
import request from "@/utils/request";

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.request = request;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
