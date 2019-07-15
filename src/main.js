import Vue from 'vue'
import VueProgressiveImage from 'vue-progressive-image'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueProgressiveImage)

new Vue({
  render: h => h(App),
}).$mount('#app')
