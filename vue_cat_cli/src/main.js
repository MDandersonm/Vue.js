import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter('localeNum1',function(val){
  return val.toLocaleString()
})
// 전역필터


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
