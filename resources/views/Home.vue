<template>
    <div class="home box-sm">
      <div class="home__text">
        <h1 class="home__h1">Some title <vue-typer
          :text='["Arya","Jon Snow","Daenerys","Melisandre","Tyrion"]'
          :pre-type-delay='100'
          :type-delay='200'
          :pre-erase-delay='2000'
          :erase-delay='80'
          erase-style='backspace'
        ></vue-typer></h1>
        <p class="home__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, culpa dolorem deleniti aspernatur itaque! Eos corporis quidem aspernatur quibusdam expedita at dolorem omnis, voluptatem quos labore dolores, saepe voluptatibus debitis!</p>
        <figure class="home__switcher" @click="moveEyes">
          <img class="home__switcher--img" src="/img/cat-paw-stroke.svg" alt="">
        </figure>
      </div>
      <div class="lighter">
        <figure :class="['lighter__on', {active: light}]">
          <img class="lighter__img" src="/img/lighter_on.png" alt="">
          <div class="lighter__cat">
            <img src="/img/icon.svg" alt="">
            <div class="lighter__cat--eye"></div>
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
    name: "home",
    data: function () {
      return {
        name: "home",
        light: false
      }
    },
    components: {
      'vue-typer': VueTyper
    },
    methods: {
      moveEyes: function () {
        document.addEventListener("mousemove", mathEyes)

        this.light = !this.light
        
        function mathEyes(event) {
          const cat = document.querySelector('.lighter__cat')
          const catEyeLeft = cat.querySelector('.lighter__cat--eye')
          const catParams = {
            height: cat.offsetHeight,
            width: cat.offsetWidth,
            top: cat.getBoundingClientRect().top,
            left: cat.getBoundingClientRect().left,
            eyes: {
              left: {
                top: 54,
                left: 29,
                width: 16,
                height: 8
              }
            }
          }

          console.log('play')
          const position = {
            x: event.x,
            y: event.y,
          }
          const current = {
            hor: catParams.left + catParams.eyes.left.left - position.x,  
            vert: catParams.top + catParams.eyes.left.top - position.y
          }

          const coef = {
            y: (catParams.top + catParams.eyes.left.top) / (catParams.eyes.left.height/2),
            x: (catParams.left + catParams.eyes.left.left) / (catParams.eyes.left.width/2)
          }

          if ((current.hor + catParams.eyes.left.width) > 0 && (current.hor + catParams.eyes.left.width) <= catParams.eyes.left.width) {
            catEyeLeft.style.left = current.hor + catParams.eyes.left.left + 'px'
          } else {
            catEyeLeft.style.left = -1 * current.hor/coef.x + catParams.eyes.left.left + 'px'
          }

          if ((current.vert + catParams.eyes.left.height) > 0 && (current.vert + catParams.eyes.left.height) <= catParams.eyes.left.height) {
            catEyeLeft.style.top = current.vert + catParams.eyes.left.top + 'px'
          } else {
            catEyeLeft.style.top = -1 * current.vert/coef.y + catParams.eyes.left.top + 'px'
          }
        }
      }
    }
  }
</script>
