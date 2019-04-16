'use strict'

import Vue from 'vue'

import VueRouter from 'vue-router'
import VueHeadful from 'vue-headful'
import routes from './routes'
import store from './store'

import Header from '../../views/components/header'
import Loader from '../../views/components/loader'

import axios from 'axios'

Vue.use(VueRouter)
Vue.use(VueHeadful)

Vue.component('vue-headful', VueHeadful)
Vue.component('vue-header', Header)
Vue.component('vue-loader', Loader)

Vue.prototype.$axios = axios

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.body.querySelector('link.styles').href = '/css/pages/' + to.name + '.css'
  next()
})

const app = new Vue({
  router,
  store,
  mounted () {
    let classList = document.body.classList
    setTimeout(function () {
      classList.add('start')
      setTimeout(function () {
        classList.add('ready')
        setTimeout(function () {
          classList.remove('start')
          store.dispatch('fetchLoading', false)
        }, 600)
      }, 500)
    }, 4000)

  }
}).$mount('#app')