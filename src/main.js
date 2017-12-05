import Vue from 'vue'
import App from './App.vue'
import VueResoruse from 'vue-resource'

Vue.use(VueResoruse);
new Vue({
  el: '#app',
  render: h => h(App)
})
