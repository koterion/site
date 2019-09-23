<template>
  <div class="home box-sm">
    <vue-headful :title="header.title"></vue-headful>
    <div class="home__text">
      <h1 class="home__h1">I am
        <vue-typer
          :text='["Team Lead","Front-End Developer","Koterion", "Ihor"]'
          :pre-type-delay='40'
          :type-delay='80'
          :pre-erase-delay='2000'
          :erase-delay='50'
          erase-style='backspace'
        ></vue-typer>
      </h1>
      <p class="home__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, culpa dolorem deleniti
                         aspernatur itaque! Eos corporis quidem aspernatur quibusdam expedita at dolorem omnis,
                         voluptatem quos labore dolores, saepe voluptatibus debitis!</p>
      <figure v-if="$store.state.display.current > $store.state.display.laptop" class="home__switcher" @click="!light ? moveEyes() : destroyEyes()">
        <img class="home__switcher--img" v-for="n in 4" :data-glitch="n" src="/img/cat-paw-stroke.svg" :alt="'cat pow ' + n">
      </figure>
    </div>
    <div v-if="$store.state.display.current > $store.state.display.laptop" class="lighter">
      <figure :class="['lighter__on', {active: light}]">
        <img class="lighter__img" src="/img/lighter_on.png" alt="Lighter">
        <div class="lighter__cat">
          <img src="/img/icon.svg" alt="Cat head">
          <div class="eye__left">
            <div class="eye__pupil"></div>
            <div class="eye__light"></div>
          </div>
          <div class="eye__right">
            <div class="eye__pupil"></div>
            <div class="eye__light"></div>
          </div>
        </div>
        <router-link class="lighter__arrow" :to="{name: 'portfolio'}">
          <img class="lighter__arrow--img" src="/img/arrow-portfolio.svg" alt="Portfolio arrow">
        </router-link>
      </figure>
      <figure :class="['lighter__off', {active: !light}]">
        <img class="lighter__img" src="/img/lighter_off.png" alt="Lighter">
      </figure>
    </div>
  </div>
</template>

<script>
  import { VueTyper } from 'vue-typer'

  export default {
    name: 'home',
    data: function () {
      return {
        header: {
          title: 'Koterion'
        },
        name: 'home',
        light: false
      }
    },
    components: {
      'vue-typer': VueTyper
    },
    methods: {
      moveEyes: function () {
        document.addEventListener('mousemove', this.mathEyes)
        this.light = !this.light
      },
      mathEyes: function (event) {
        const cat = document.querySelector('.lighter__cat')
        const eyeLeft = cat.querySelector('.eye__left .eye__pupil')
        const eyeRight = cat.querySelector('.eye__right .eye__pupil')
        const eyeRightLight = cat.querySelector('.eye__right .eye__light')
        const eyeLeftLight = cat.querySelector('.eye__left .eye__light')
        const catParams = {
          height: cat.offsetHeight,
          width: cat.offsetWidth,
          top: cat.getBoundingClientRect().top,
          left: cat.getBoundingClientRect().left,
          eyes: {
            top: 54,
            width: 20,
            height: 10,
            left: 29,
            right: 70
          }
        }
        const position = {
          x: event.x,
          y: event.y
        }
        const current = {
          hor: position.x - catParams.left - catParams.eyes.left,
          vert: catParams.top + catParams.eyes.top - position.y
        }

        const coef = {
          y: (catParams.top + catParams.eyes.top) / (catParams.eyes.height / 2),
          x: {
            left: (catParams.left + catParams.eyes.left) / (catParams.eyes.width / 2),
            right: (catParams.left + catParams.eyes.right) / (catParams.eyes.width / 2)
          }
        }

        const a = catParams.eyes.width / 2
        const b = catParams.eyes.height / 2
        const xl = Math.abs(current.hor / coef.x.left) < 8.38 ? current.hor / coef.x.left : Math.sign(current.hor / coef.x.left) * 8.38
        const xr = Math.abs(current.hor / coef.x.right) < 8.38 ? current.hor / coef.x.right : Math.sign(current.hor / coef.x.right) * 8.38

        const y = current.vert / coef.y

        let yl = (-11 * xl * b * b - 2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl)) / (5 * a * a + 11 * b * b)
        let yr = (11 * xl * b * b - 2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl)) / (5 * a * a + 11 * b * b)

        if (y >= 0) {
          yl = (2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl) - 11 * xl * b * b) / (5 * a * a + 11 * b * b)
          yr = (2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl) + 11 * xl * b * b) / (5 * a * a + 11 * b * b)
        }

        let hor = {
          left: (y > 0 ? (y > yl ? yl < 0 ? 0 : -yl : -y) : (yl > y ? -yl < 0 ? 0 : -yl : -y)) + catParams.eyes.top,
          right: (y > 0 ? (y > yr ? yr < 0 ? 0 : -yr : -y) : (yr > y ? -yr < 0 ? 0 : -yr : -y)) + catParams.eyes.top
        }

        let vert = {
          left: xl + catParams.eyes.left,
          right: xr + catParams.eyes.right
        }

        eyeLeft.style.left = vert.left.toFixed() + 'px'
        eyeLeft.style.top = hor.left.toFixed() + 'px'

        eyeLeftLight.style.left = vert.left.toFixed() + 'px'
        eyeLeftLight.style.top = hor.left.toFixed() + 'px'

        eyeRight.style.left = vert.right.toFixed() + 'px'
        eyeRight.style.top = hor.right.toFixed() + 'px'

        eyeRightLight.style.left = vert.right.toFixed() + 'px'
        eyeRightLight.style.top = hor.right.toFixed() + 'px'
      },
      destroyEyes: function () {
        document.removeEventListener('mousemove', this.mathEyes)
        this.light = !this.light
      }
    },
    beforeRouteLeave (to, from, next) {
      this.destroyEyes()
      next()
    }
  }
</script>
