import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from 'axios'

import App from './App.vue'
import Logs from './components/Logs.vue'
import Data from './components/Data.vue'
import AddData from './components/AddData.vue'

Vue.config.productionTip = false

import VueSession from 'vue-session'
import Axios from 'axios';
import Config from './env/config';
Vue.use(VueSession)

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/addData' },
  { path: '/logs', component: Logs },
  { path: '/data', component: Data },
  { path: '/addData', component: AddData },
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || 'NotFound'
    }
  },
  mounted: function () {
    this.userSession()
  },
  methods: {
    userSession: function () {
      if (!this.$session.id()) {
        this.$session.start()
        axios.post(`${Config.server}/log`, {
          type: 'login'
        }).then(response => {
          // console.log(response)
        })
      }
    }
  },
  render: h => h(App),
}).$mount('#app')
