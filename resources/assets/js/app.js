'use strict'

import Vue from 'vue'

import VueRouter from 'vue-router'
import VueHeadful from 'vue-headful'
import routes from './routes'
import store from './store'

import Header from '../../views/components/header'
import Loader from '../../views/components/loader'
import Footer from '../../views/components/footer'

import axios from 'axios'

Vue.use(VueRouter)
Vue.use(VueHeadful)

Vue.component('vue-headful', VueHeadful)
Vue.component('vue-header', Header)
Vue.component('vue-loader', Loader)
Vue.component('vue-footer', Footer)

Vue.prototype.$axios = axios

Vue.mixin({
  methods: {
    on: function (elem, event, func) {
      if (elem.addEventListener) {
        elem.addEventListener(event, func)
      } else {
        elem.attachEvent('on' + event, func)
      }
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('toggleMenu', false)

  next()
})

const app = new Vue({
  router,
  store,
  async mounted () {
    let classList = document.body.classList
    await store.dispatch('fetchPortfolio')

    setTimeout(function () {
      classList.add('start')
      setTimeout(function () {
        classList.add('ready')
        setTimeout(function () {
          classList.remove('start')
          store.dispatch('fetchLoading', false)
        }, 600)
      }, 500)
    }, 2000)
  }
}).$mount('#app')
