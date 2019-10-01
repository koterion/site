<template>
  <div class="portfolio box-sm">
    <vue-headful :title="header.title" :description="header.description" :head="{
      '[name=robots]' : {content: header.robots}
    }"></vue-headful>
    <nav class="portfolio__time">
      <button v-for="year in portfolios.years"
              :class="['portfolio__time--item', { active: currentYear === year }]" @click="changeYear(year)">
        <span v-if="year !== portfolios.years[portfolios.years.length - 1]">{{year}}</span>
        <span v-else>Now</span>
        <span v-if="$store.getters.getDisplay('mobile')" class="dop">portfolio</span>
      </button>
    </nav>
    <div class="portfolio__block">
      <transition>
        <div v-if="!change" :class="['portfolio__list', $store.state.tab, {active: $store.state.animation}]">
          <div class="portfolio__item" v-for="item in portfolios.group[currentYear]">
            <div class="portfolio__item--block">
              <h3 class="portfolio__item--title">{{item.title}}</h3>
              <p class="portfolio__item--text">{{item.description}}</p>
              <div class="portfolio__item--footer">
                <btn class="portfolio__item--btn" :link="item.site" :text="'Site'"/>
                <btn class="portfolio__item--btn" :link="{name: 'portfolio.one', params: {id: item.id}}" :text="'More'" :route="true"/>
              </div>
            </div>
            <div class="portfolio__item--image">
              <div class="icons">
                <div class="square"></div>
                <div class="triangle"></div>
                <div class="circle"></div>
              </div>
              <figure class="image">
                <img :src="'/storage/'+item.image" :alt="item.title">
              </figure>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        header: {
          title: 'Koterion | Portfolio',
          description: 'Koterion Portfolio Page',
          robots: 'noindex,nofollow',
          add: 'portfolio'
        },
        change: false
      }
    },
    computed: mapState({
      portfolios: state => state.portfolios.all,
      currentYear: state => state.portfolios.year
    }),
    methods: {
      changeYear(year) {
        if (!this.change) {
          this.change = !this.change

          setTimeout(()=>{
            this.$store.dispatch('portfolios/clickYearTab', year)
            this.change = !this.change
          }, 300)
        }
      }
    }
  }
</script>