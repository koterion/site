<template>
  <div class="portfolio__one box-sm">
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
        <a class="portfolio__one--btn" :href="portfolio.current.site" target="_blank">Visit the website</a>
      </div>
    </div>
    <div class="gui">
      <h1>{{portfolio.current.title}}</h1>
      {{portfolio.current.content}}
      <div class="clear"></div>
    </div>
    <div class="portfolio__one--footer">
      <router-link v-if="portfolio.prev" :to="{name: 'portfolio.one', params: {id: portfolio.prev}}" class="btn">
        previous project
      </router-link>
      <div v-else class="disabled btn">previous project</div>
      <router-link v-if="portfolio.next" :to="{name: 'portfolio.one', params: {id: portfolio.next}}" class="btn">
        next project
      </router-link>
      <div v-else class="disabled btn">next project</div>
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

<style scoped>

</style>