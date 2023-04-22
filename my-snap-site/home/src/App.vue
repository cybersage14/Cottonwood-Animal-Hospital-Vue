<template>
  <div id="app">
    <HomePage />
    <ServicesPage />
  </div>
</template>


<script>
import './main.js';
import ServicesPage from './components/ServicesPage.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    ServicesPage
  },
  data() {
    return {
      title: 'Animal Hospital'
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
