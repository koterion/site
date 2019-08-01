<template>
  <div class="portfolio box">
    <nav class="portfolio__time">
      <button v-for="year in portfolio.years"
              :class="['portfolio__time--item', { active: currentYear === year }]" @click="changeYear(year)">
        <span v-if="year !== portfolio.years[portfolio.years.length - 1]">{{year}}</span>
        <span v-else>Now</span>
        <span class="dop">portfolio</span>
      </button>
    </nav>
    <div :class="'portfolio__list ' + $store.state.tab">
      <div class="portfolio__item" v-for="item in portfolio.data[currentYear]">
        <div class="portfolio__item--block">
          <h3 class="portfolio__item--title">{{item.title}}</h3>
          <p class="portfolio__item--text">{{item.description}}</p>
          <div class="portfolio__item--footer">
            <a class="portfolio__item--btn" :href="item.site" target="_blank">Site</a>
            <router-link :to="{name: 'portfolio.one', params: {id: item.id}}" class="portfolio__item--btn">More
            </router-link>
          </div>
        </div>
        <div class="portfolio__item--image">
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
        header: {
          title: 'Koterion | Portfolio',
          add: 'portfolio'
        }
      }
    },
    computed: {
      ...mapGetters({
        portfolio: 'getPortfolio',
        currentYear: 'getYear'
      })
    },
    methods: {
      changeYear(year) {
        this.$store.dispatch('clickYearTab', year)
      }
    }
  }
</script>

<style scoped>

</style>