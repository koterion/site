<template>
  <div class="portfolio__one box-page">
    <vue-headful :title="portfolio.current.title"></vue-headful>
    <div class="carousel">
      <div class="icons">
        <div class="square"></div>
        <div class="triangle"></div>
        <div class="circle"></div>
      </div>
      <div v-if="portfolio" class="glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <figure v-for="(image, index) in portfolio.images" class="glide__slide carousel__image">
              <img :src="image" :alt="index">
            </figure>
          </div>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button v-for="(image, index) in portfolio.images" class="glide__bullet" :data-glide-dir="'='+index"></button>
        </div>
        <btn :link="portfolio.current.site" :text="'Visit the website'" class="portfolio__one--btn"/>
      </div>
    </div>
    <div class="gui">
      <h1>{{portfolio.current.title}}</h1>
      {{portfolio.current.content}}
      <div class="clear"></div>
    </div>
    <div class="portfolio__one--footer">
      <btn v-if="portfolio.prev" :link="{name: 'portfolio.one', params: {id: portfolio.prev}}" :text="$store.state.display.current > $store.state.display.padmini ? 'previous project' : 'previous'" :route="true"/>
      <div v-else class="disabled btn">previous <span v-if="$store.state.display.current > $store.state.display.padmini">project</span></div>
      <btn v-if="portfolio.next" :link="{name: 'portfolio.one', params: {id: portfolio.next}}" :text="$store.state.display.current > $store.state.display.padmini ? 'next project' : 'next'" :route="true"/>
      <div v-else class="disabled btn">next <span v-if="$store.state.display.current > $store.state.display.padmini">project</span></div>
    </div>
  </div>
</template>

<script>
  import Glide from '@glidejs/glide'
  import { mapGetters } from 'vuex'

  let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 6500
  })

  export default {
    watch: {
      '$route.params.id' () {
        this.$store.dispatch('fetchPortfolioOne', this.$route.params.id).then(() => {
          glide.destroy()
          glide = new Glide('.glide', {
            type: 'carousel',
            perView: 1,
            autoplay: 6500
          }).mount()
        })
      }
    },
    beforeCreate () {
      this.$store.dispatch('fetchPortfolioOne', this.$route.params.id).then(() => {
        glide.mount()
      })
    },
    computed: {
      ...mapGetters({
        portfolio: 'getPortfolioOne'
      })
    }
  }
</script>