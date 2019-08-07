<template>
  <router-link v-if="route" :to="link" class="btn" :data-text="text">
    {{text}}
    <span class="text">{{text}}</span>
  </router-link>
  <a v-else :href="link" class="btn" :data-text="text" target="_blank">
    {{text}}
    <span class="text">{{text}}</span>
  </a>
</template>

<script>
  export default {
    props: ['text', 'link', 'route'],
    name: 'btn'
  }
</script>