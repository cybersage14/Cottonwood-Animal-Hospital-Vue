<template>
  <div class="main-content">
    <div id="app">
      <AppHeader />
      <router-view></router-view>
      <Footer />
    </div>
  </div>

</template>


<script>
import AppHeader from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    AppHeader,
    Footer
  }
}
</script>
