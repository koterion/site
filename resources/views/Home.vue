<template>
  <div class="home box-sm">
    <div class="home__text">
      <h1 class="home__h1">Some title
        <vue-typer
          :text='["Arya","Jon Snow","Daenerys","Melisandre","Tyrion"]'
          :pre-type-delay='100'
          :type-delay='200'
          :pre-erase-delay='2000'
          :erase-delay='80'
          erase-style='backspace'
        ></vue-typer>
      </h1>
      <p class="home__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, culpa dolorem deleniti
                         aspernatur itaque! Eos corporis quidem aspernatur quibusdam expedita at dolorem omnis,
                         voluptatem quos labore dolores, saepe voluptatibus debitis!</p>
      <figure class="home__switcher" @click="!light ? moveEyes() : destroyEyes()">
        <img class="home__switcher--img" src="/img/cat-paw-stroke.svg" alt="">
      </figure>
    </div>
    <div class="lighter">
      <figure :class="['lighter__on', {active: light}]">
        <img class="lighter__img" src="/img/lighter_on.png" alt="">
        <div class="lighter__cat">
          <img src="/img/icon.svg" alt="">
          <div class="eye__left">
            <div class="eye__pupil"></div>
            <div class="eye__light"></div>
          </div>
          <div class="eye__right">
            <div class="eye__pupil"></div>
            <div class="eye__light"></div>
          </div>
        </div>
      </figure>
      <figure :class="['lighter__off', {active: !light}]">
        <img class="lighter__img" src="/img/lighter_off.png" alt="">
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
          left: (y > 0 ? (y > yl ? -yl : -y) : (yl > y ? -yl : -y)) + catParams.eyes.top,
          right: (y > 0 ? (y > yr ? -yr : -y) : (yr > y ? -yr : -y)) + catParams.eyes.top
        }

        let vert = {
          left: xl + catParams.eyes.left,
          right: xr + catParams.eyes.right
        }

        eyeLeft.style.left = vert.left + 'px'
        eyeLeft.style.top = hor.left + 'px'

        eyeLeftLight.style.left = vert.left + 'px'
        eyeLeftLight.style.top = hor.left + 'px'

        eyeRight.style.left = vert.right + 'px'
        eyeRight.style.top = hor.right + 'px'

        eyeRightLight.style.left = vert.right + 'px'
        eyeRightLight.style.top = hor.right + 'px'
      },
      destroyEyes: function () {
        document.removeEventListener('mousemove', this.mathEyes)
        this.light = !this.light
      }
    }
  }
</script>
