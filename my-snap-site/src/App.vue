<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
      </ul>
    </nav>
    <router-view />
    <AboutPage />
  </div>
</template>


<script>

import AboutPage from './components/About.vue';

export default {
  name: 'App',
  components: {
    AboutPage
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
