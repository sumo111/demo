import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'wlwmwnt-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(axios)
Vue.use(ElementUI)
Vue.prototype.$echarts =echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
