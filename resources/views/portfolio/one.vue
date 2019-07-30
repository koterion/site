<template>
  <div class="portfolio__one box">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nulla.</li>
          <li class="glide__slide">Aperiam natus nostrum vel. Dolorem doloribus laudantium mollitia repellat ut.</li>
          <li class="glide__slide">Ab dolorem, esse expedita harum laudantium natus ratione rem sunt?</li>
          <li class="glide__slide">At consequuntur, dolorum maxime nihil officiis porro quisquam saepe voluptatibus?</li>
          <li class="glide__slide">At, commodi cumque deserunt earum esse nisi provident quos sunt.</li>
          <li class="glide__slide">Accusamus accusantium blanditiis dolorem eaque error facilis possimus sequi veniam!</li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
        <button class="glide__bullet" data-glide-dir="=4"></button>
        <button class="glide__bullet" data-glide-dir="=5"></button>
      </div>
    </div>
  </div>
</template>

<script>
  import Glide from '@glidejs/glide'

  export default {
    mounted () {
      new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 'center',
        gap: 0,
        autoplay: 4000
      }).mount()
    }
  }
</script>

<style scoped>

</style>