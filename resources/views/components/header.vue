<template>
    <header :class="'header' + (this.$store.state.menu ? ' active' : '')">
        <div :class="'header__burger' + (this.$store.state.menu ? ' active' : '')" @click="toggleMenu"><div class="header__burger--item"></div></div>
        <router-link :to="{name: 'home'}" :tag="$route.name !== 'home' ? 'a' : 'div'"><logo class="header__logo"/></router-link>
        <section class="header__info">
            <nav class="header__menu">
                <router-link :to="{name: 'about-me'}" class="header__menu--a"> About Me </router-link>
                <router-link :to="{name: 'portfolio'}" class="header__menu--a"> Portfolio </router-link>
                <router-link :to="{name: 'pet-projects'}" class="header__menu--a"> Pet Projects </router-link>
                <router-link :to="{name: 'blog'}" class="header__menu--a"> Blog </router-link>
                <router-link :to="{name: 'contacts'}" class="header__menu--a"> Contacts </router-link>
            </nav>
            <nav class="header__social">
                <a class="header__social--a" href="https://github.com" target="_blank"><img src="/img/github.png" alt="Github"></a>
                <a class="header__social--a" href="https://linkedin.com" target="_blank"><img src="/img/linkedin.png" alt="Linkedin"></a>
            </nav>
        </section>
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
        this.$store.dispatch('toggleMenu')
      },
      toggleTab: function () {
        this.$store.dispatch('toggleTab')
      }
    }
  }
</script>

<style scoped>

</style>