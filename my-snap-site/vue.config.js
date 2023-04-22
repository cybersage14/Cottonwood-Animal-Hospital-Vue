const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-snap-site/'
    : '/',
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      entry: 'home/main.js',
      title: 'Home'
    }
  }
}
module.exports = {
  chainWebpack: config => {
    config.entry('app').clear().add('./home/src/main.js').end();
  }
}