<template>
    <div class="work box">
        <nav class="work__time">
            <button v-for="(item, index) in items" :key="item.id" :class="['work__time--item', { active: active === item.id }]" @click="active = item.id">{{item.year}}</button>
        </nav>
        <div :class="'work__list' + (this.$store.state.tab ? ' row' : ' col')">
            <div class="work__item" v-for="(item, index) in items" :key="item.id">
                <div class="work__item--block">
                    <h3 class="work__item--title">{{item.title}}</h3>
                    <p class="work__item--text">{{item.text}}</p>
                    <div class="work__item--footer">
                        <a class="work__item--btn" href="#.">Visit</a>
                        <a class="work__item--btn" href="#.">Visit</a>
                    </div>
                </div>
                <div class="work__item--image">
                    <div class="icons">
                        <div class="square"></div>
                        <div class="triangle"></div>
                        <div class="circle"></div>
                    </div>
                    <figure class="image">
                        <img src="/img/portfolio.png" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        loading: true,
        active: 0,
        items: {
          0: {
            id: 0,
            year: 2017,
            title: 'Some',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremvdantium, totam rem aperiam, eaque ipsa quae ab ilentore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
          },
          1: {
            id: 1,
            year: 2015,
            title: 'Some',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremvdantium, totam rem aperiam, eaque ipsa quae ab ilentore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
          },
          2: {
            id: 2,
            year: 2014,
            title: 'Some',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremvdantium, totam rem aperiam, eaque ipsa quae ab ilentore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
          },
        }
      }
    },
    name: 'all'
  }
</script>

<style scoped>

</style>