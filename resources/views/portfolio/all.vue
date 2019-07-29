<template>
  <div class="work box">
    <nav class="work__time">
<!--      <button v-for="item in portfolio.data" :key="item.id"-->
<!--              :class="['work__time&#45;&#45;item', { active: active === item.id }]" @click="active = item.id">{{item.year}}-->
<!--      </button>-->
    </nav>
    <div :class="'work__list ' + this.$store.state.tab">
      <div class="work__item" v-for="item in portfolio" :key="item.id">
        <div class="work__item--block">
          <h3 class="work__item--title">{{item.title}}</h3>
          <p class="work__item--text">{{item.description}}</p>
          <div class="work__item--footer">
            <a class="work__item--btn" :href="item.site_url" target="_blank">Site</a>
            <router-link :to="{name: 'portfolio.one', params: {id: item.id}}" class="work__item--btn">More</router-link>
          </div>
        </div>
        <div class="work__item--image">
          <div class="icons">
            <div class="square"></div>
            <div class="triangle"></div>
            <div class="circle"></div>
          </div>
          <figure class="image">
            <img :src="item.image" :alt="item.title">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: function () {
      return {
        loading: true,
        active: 0,
        header: {
          title: 'Koterion | Portfolio',
          add: 'portfolio'
        }
      }
    },
    watch: {
      '$route.query.page' () {
        this.$store.dispatch('fetchPortfolio', this.$route.query.page)
      }
    },
    computed: {
      ...mapGetters({
        portfolio: 'getPortfolio'
      })
    },
    created () {
      this.$store.dispatch('fetchPortfolio')
    }
  }
</script>

<style scoped>

</style>