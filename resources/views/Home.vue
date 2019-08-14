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
        <figure class="home__switcher" @click="light = !light">
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
    mounted() {
      function eyes(event) {
        const cat = document.querySelector('.lighter__cat')
        const catEyeLeft = cat.querySelector('.lighter__cat--eye')
        const catHeight = cat.offsetHeight
        const catWidth = cat.offsetWidth
        const catTop = cat.getBoundingClientRect().top
        const catLeft = cat.getBoundingClientRect().left
        const position = {
          x: event.x,
          y: event.y,
        }

        if ((catLeft + catWidth - position.x) >= 1 && (catLeft + catWidth - position.x) <= catWidth) {
          catEyeLeft.style.left = Math.abs(catLeft - position.x) + 'px'
        }

        if ((catTop + catHeight - position.y) >= 1 && (catTop + catHeight - position.y) <= catWidth) {
          catEyeLeft.style.top = Math.abs(catTop - position.y) + 'px'
        }
      }

      window.onmousemove = eyes
    }
  }
</script>
