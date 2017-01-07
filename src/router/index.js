import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

import Home from '../pages/index.vue'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home }
  ]
})
