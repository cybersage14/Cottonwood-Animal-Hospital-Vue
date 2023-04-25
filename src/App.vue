<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import Footer from './components/Footer.vue';

export default 
{
  components: 
  {
    AppHeader,
    Footer
  }
}
</script>
