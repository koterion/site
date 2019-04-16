const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const Dotenv = require('dotenv-webpack')
const fs = require('fs')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

let getFiles = function (dir) {
  return fs.readdirSync(dir).filter(file => {
    return fs.statSync(`${dir}/${file}`).isFile()
  })
}

getFiles('resources/assets/sass/pages').forEach(function (filepath) {
  mix.sass('resources/assets/sass/pages/' + filepath, 'public/css/pages')
})

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/loader.sass', 'public/css')

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
