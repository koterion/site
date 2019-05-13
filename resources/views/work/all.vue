<template>
    <div class="work box">
        <item v-for="n in 10" :key="n">
            <div class="image"></div>
        </item>
    </div>
</template>

<script>
  import Item from './one'

  export default {
    name: 'all',
    components: { Item }
  }
</script>

<style scoped>

</style>