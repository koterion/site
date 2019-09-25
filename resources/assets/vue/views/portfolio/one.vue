<template>
  <div class="portfolio__one box-page">
    <vue-headful :title="portfolio.current.title" :description="portfolio.current.description" :head="{
      '[name=robots]' : {content: header.robots}
    }"></vue-headful>
    <div class="carousel">
      <div class="icons">
        <div class="square"></div>
        <div class="triangle"></div>
        <div class="circle"></div>
      </div>

      <video v-if="portfolio.current.video" class="portfolio__one--video"  :src="portfolio.current.video" preload="auto" autoplay loop muted></video>

      <div v-else class="glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <figure v-for="(image, index) in portfolio.images" class="glide__slide carousel__image">
              <img :src="'/storage/'+image" :alt="index">
            </figure>
          </div>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button v-for="(image, index) in portfolio.images" class="glide__bullet" :data-glide-dir="'='+index"></button>
        </div>
      </div>
    </div>
    <div v-if="portfolio.current.site" class="carousel__after">
      <btn :link="portfolio.current.site" :text="'Visit the website'" class="portfolio__one--btn"/>
    </div>
    <div class="gui">
      <h1>{{portfolio.current.title}}</h1>
      <div v-html="portfolio.current.content"></div>
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
  import { mapState } from 'vuex'

  let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 6500
  })

  export default {
    data: function () {
      return {
        header: {
          robots: 'noindex,nofollow'
        }
      }
    },
    watch: {
      '$route.params.id' () {
        this.$store.dispatch('portfolios/fetchPortfolioOne', this.$route.params.id).then(() => {
          if (!this.portfolio.current.video) {
            glide.destroy()
            glide = new Glide('.glide', {
              type: 'carousel',
              perView: 1,
              autoplay: 6500
            }).mount()
          }
        }).catch((e) => {
          this.$router.push({ name: 'error', params: { 0: this.$route.params.id } })
          throw new Error(e)
        })
      }
    },
    beforeCreate () {
      this.$store.dispatch('portfolios/fetchPortfolioOne', this.$route.params.id).then(() => {
        if (!this.portfolio.current.video) {
          glide.mount()
        }
      }).catch((e) => {
        this.$router.push({ name: 'error', params: { 0: this.$route.params.id } })
        throw new Error(e)
      })
    },
    computed: mapState({
      portfolio: state => state.portfolios.one
    })
  }
</script>