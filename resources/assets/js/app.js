'use strict'

import Vue from 'vue'

import VueRouter from 'vue-router'
import VueHeadful from 'vue-headful'
import routes from './routes'
import store from './store'

import Header from '../../views/components/header'
import Loader from '../../views/components/loader'
import Footer from '../../views/components/footer'
import Transfer from '../../views/components/transfer'
import Btn from '../../views/components/btn'

import axios from 'axios'

Vue.use(VueRouter)
Vue.use(VueHeadful)

Vue.component('vue-headful', VueHeadful)
Vue.component('vue-loader', Loader)
Vue.component('vue-header', Header)
Vue.component('vue-transfer', Transfer)
Vue.component('vue-footer', Footer)
Vue.component('btn', Btn)

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
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  const transfer = document.querySelector('.transfer')

  if (transfer) {
    transfer.classList.add('active')
    setTimeout(next, 500)
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  const transfer = document.querySelector('.transfer')
  if (transfer) {
    setTimeout(() => {
      transfer.classList.remove('active')
    }, 1000)
  }
})

new Vue({
  router,
  store,
  async mounted () {
    const classList = document.body.classList
    await store.dispatch('fetchPortfolio')

    classList.add('start')
    setTimeout(function () {
      classList.add('ready')
      setTimeout(function () {
        classList.remove('start')
        store.dispatch('fetchLoading', false)
      }, 600)
    }, 500)
  }
}).$mount('#app')
