<template>
  <router-link v-if="route" :to="link" class="btn" :data-text="text">
    {{text}}
    <span v-if="$store.state.display.current > $store.state.display.pad" class="text">{{text}}</span>
  </router-link>
  <a v-else :href="link" class="btn" :data-text="text" target="_blank" rel="nofollow">
    {{text}}
    <span v-if="$store.state.display.current > $store.state.display.pad" class="text">{{text}}</span>
  </a>
</template>

<script>
  export default {
    props: ['text', 'link', 'route'],
    name: 'btn'
  }
</script>