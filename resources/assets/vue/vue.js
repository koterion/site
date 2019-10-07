'use strict'

import Vue from 'vue'

import VueHeadful from 'vue-headful'
import { createRouter } from './routes'
import { createStore } from './store'

import Header from './views/components/header'
import Loader from './views/components/loader'
import Footer from './views/components/footer'
import Transfer from './views/components/transfer'
import Btn from './views/components/btn'

import axios from 'axios'

Vue.use(VueHeadful)

Vue.component('vue-headful', VueHeadful)
Vue.component('vue-loader', Loader)
Vue.component('vue-header', Header)
Vue.component('vue-transfer', Transfer)
Vue.component('vue-footer', Footer)
Vue.component('btn', Btn)

const store = createStore()
const router = createRouter()

const cookies = {
  set: function (name, value, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
    console.log(document.cookie)
  },
  get: function (name) {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
}

if (!cookies.get('framework')) {
  router.push({ name: 'framework' })
}

Vue.prototype.$axios = axios

Vue.mixin({
  methods: {
    on: function (elem, event, func) {
      if (elem.addEventListener) {
        elem.addEventListener(event, func)
      } else {
        elem.attachEvent('on' + event, func)
      }
    },
    setCookie: function (name, value, expires = 2) {
      cookies.set(name, value, expires)
    },
    setFramework: function (name, value, expires = 2) {
      this.setCookie(name, value, expires)
      location.assign('/')
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'framework') {
    store.dispatch('toggleMenu', false)
    const transfer = document.querySelector('.transfer')

    if (transfer) {
      transfer.classList.add('active')
      setTimeout(next, 500)
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  const transfer = document.querySelector('.transfer')
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
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
    await store.dispatch('portfolios/fetchPortfolio')

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
