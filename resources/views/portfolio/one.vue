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
        <a class="portfolio__one--btn" :href="data.site" target="_blank">Visit the website</a>
      </div>
    </div>
    <div class="gui">
      <h1>{{data.title}}</h1>
      {{data.content}}
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
    autoplay: 6500
  })

  export default {
    data: function () {
      return {
        data: '',
        images: '',
        ids: {
          prev: '',
          next: ''
        }
      }
    },
    beforeCreate() {
      Portfolio.show(Portfolio.getUrl(),this.$route.params.id)
        .then(
          response => {
            this.data = response.data.current
            this.images = JSON.parse(response.data.current.carousel)
            this.ids.prev = response.data.prev
            this.ids.next = response.data.next

            setTimeout(function (){
              glide.mount()
            })
          },
          error => {
            throw new Error('Show Portfolio. ' + error.message)
          }
        )
    },
  }
</script>

<style scoped>

</style>