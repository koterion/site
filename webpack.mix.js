const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const Dotenv = require('dotenv-webpack')

mix.js('resources/assets/vue/vue.js', 'public/js')
  .extract(['vue', 'vue-router', 'vue-headful'])
  .sass('resources/assets/sass/loader.sass', 'public/css')
  .sass('resources/assets/sass/main.sass', 'public/css')
  .sass('resources/assets/sass/config/general.sass', 'public/css')

  .webpackConfig({
    plugins: [
      new Dotenv()
    ]
  })

  .options({
    processCssUrls: false,
    postCss: [
      autoprefixer
    ]
  })
  .version()
  .browserSync(process.env.APP_URL)

if (mix.inProduction()) {
  mix.copy('resources/assets/img/*.*', 'public/img')
    .copy('resources/assets/video/*.*', 'public/video')
}
