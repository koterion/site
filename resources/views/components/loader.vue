<template>
    <div class="loader" v-if="this.$store.state.loading">
        <div class="loader__block">
            <logo/>
        </div>
    </div>
</template>

<script>
  import Logo from './logo'

  export default {
    data: function () {
      return {
        loading: true
      }
    },
    components: {Logo}
  }
</script>

<style scoped>

</style>