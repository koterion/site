<template>
  <div class="frameworks">
    <div class="react" @click="setFramework('framework', 'react')">
      <img class="home__switcher--img" src="/img/react.svg" v-for="n in 4" :data-glitch="n" alt="React icon">
    </div>
    <div class="vue" @click="setFramework('framework', 'vue')">
      <img class="home__switcher--img" src="/img/vue.svg" v-for="n in 4" :data-glitch="n" alt="Vue icon">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'start'
  }
</script>

<style scoped>

</style>