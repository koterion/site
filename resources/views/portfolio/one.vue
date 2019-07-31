<template>
  <div class="portfolio__one box-sm">
    <div class="carousel">
      <div class="icons">
        <div class="square"></div>
        <div class="triangle"></div>
        <div class="circle"></div>
      </div>
      <div v-if="typeof images !== 'string'" class="glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <figure v-for="(image, index) in images" class="glide__slide carousel__image">
              <img :src="image" :alt="index">
            </figure>
          </div>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button v-for="(image, index) in images" class="glide__bullet" :data-glide-dir="'='+index"></button>
        </div>
      </div>
    </div>
    <div class="gui">
      {{site.content}}
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import Glide from '@glidejs/glide'
  import Portfolio from '../../assets/js/models/Portfolio'

  let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    // autoplay: 4000
  })

  export default {
    data: function () {
      return {
        site: '',
        images: ''
      }
    },
    beforeCreate() {
      Portfolio.show(Portfolio.getUrl(),this.$route.params.id)
        .then(
          response => {
            this.site = response.data
            this.images = JSON.parse(this.site.carousel)
            setTimeout(function (){
              glide.mount()
            })
          },
          error => {
            throw new Error('Show Receiver. ' + error.message)
          }
        )
    }
  }
</script>

<style scoped>

</style>