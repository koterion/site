<template>
  <div class="portfolio__one box-sm">
    <div class="carousel">
      <div class="icons">
        <div class="square"></div>
        <div class="triangle"></div>
        <div class="circle"></div>
      </div>
      <div v-if="portfolio.images.length > 0" class="glide">
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
        <a class="portfolio__one--btn" :href="portfolio.data.site" target="_blank">Visit the website</a>
      </div>
    </div>
    <div class="gui">
      <h1>{{portfolio.data.title}}</h1>
      {{portfolio.data.content}}
      <div class="clear"></div>
    </div>
    <div class="portfolio__one--footer">
      <router-link v-if="portfolio.ids.prev" :to="{name: 'portfolio.one', params: {id: portfolio.ids.prev}}">View previous project</router-link>
      <router-link v-if="portfolio.ids.next" :to="{name: 'portfolio.one', params: {id: portfolio.ids.next}}">View next project</router-link>
    </div>
  </div>
</template>

<script>
  import Glide from '@glidejs/glide'
  import Portfolio from '../../assets/js/models/Portfolio'
  import { mapGetters } from 'vuex'

  let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 6500
  })

  export default {
    watch: {
      '$route.params.id'() {
        this.$store.dispatch('fetchPortfolioOne', this.$route.params.id).then(()=>{
          glide.destroy()

          setTimeout(function (){
            glide = new Glide('.glide', {
              type: 'carousel',
              perView: 1,
              autoplay: 6500
            }).mount()
          })
        })
        console.log('some')
      }
    },
    created() {
      this.$store.dispatch('fetchPortfolioOne', this.$route.params.id)
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