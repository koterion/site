<template>
  <router-link :to="link" class="btn" :data-text="text">
    {{text}}
    <span class="text">{{text}}</span>
  </router-link>
</template>

<script>
  export default {
    props: ['text', 'link'],
    name: 'btn'
  }
</script>

<style scoped>

</style>