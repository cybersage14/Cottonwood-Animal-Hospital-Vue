<template>
  <div id="app">
    <!-- Include the AppHeader component -->
    <AppHeader />
    <div class="container">
      <!-- Include the router-view element to display the routed components -->
      <router-view />
    </div>
    <!-- Include the Footer component -->
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
