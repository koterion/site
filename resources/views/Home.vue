<template>
    <div class="home box-sm">
      <div class="home__text">
        <h1 class="home__h1">Some title</h1>
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
          </div>
        </figure>
        <figure :class="['lighter__off', {active: !light}]">
          <img class="lighter__img" src="/img/lighter_off.png" alt="">
        </figure>
      </div>
    </div>
</template>

<script>
  export default {
    name: "home",
    data: function () {
      return {
        name: "home",
        light: false
      }
    }
  }
</script>
