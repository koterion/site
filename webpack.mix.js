const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const Dotenv = require('dotenv-webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

mix.js('resources/assets/vue/vue.js', 'public/js')
  .sass('resources/assets/sass/loader.sass', 'public/css')
  .sass('resources/assets/sass/main.sass', 'public/css')
  .sass('resources/assets/sass/config/general.sass', 'public/css')
  .react('resources/assets/react/react.js', 'public/js')

  .webpackConfig({
    plugins: [
      new Dotenv(),
      // new BundleAnalyzerPlugin()
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
