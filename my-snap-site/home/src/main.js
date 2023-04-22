import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

module.exports = {
    chainWebpack: config => {
      config.entry('app').clear().add('./home/src/main.js').end();
    }
  }