<template>
    <header class="header">
        <div :class="'header__burger' + (this.$store.state.menu ? ' active' : '')" @click="toggleMenu"><div class="header__burger--item"></div></div>
        <router-link :to="{name: 'home'}" :tag="$route.name !== 'home' ? 'a' : 'div'"><logo class="header__logo"/></router-link>
        <nav :class="'header__menu' + (this.$store.state.menu ? ' active' : '')">
            <router-link :to="{name: 'work'}" class="header__menu--a"> Works </router-link>
        </nav>
        <div :class="'header__tab' + (this.$store.state.tab ? ' row' : ' col')" @click="toggleTab">
            <div class="header__tab--item"></div>
            <div class="header__tab--item"></div>
        </div>
    </header>
</template>

<script>
  import Logo from './logo'

  export default {
    components: {Logo},
    methods: {
      toggleMenu: function () {
        let burger = this.$el.querySelector('.header__burger')

        if (!burger.classList.contains('active')) {
          this.$store.dispatch('toggleMenu')
        }

        let menu = this.$el.querySelector('.header__menu')
        this.on(document, 'mouseup', (event) => {
          if (!menu.contains(event.target) && menu.classList.contains('active')) {
            setTimeout(() => {
              this.$store.dispatch('toggleMenu', false)
            })
          }
        })
      },
      toggleTab: function () {
        this.$store.dispatch('toggleTab')
      }
    }
  }
</script>

<style scoped>

</style>