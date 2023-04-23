<template>
  <div id="app">
    <header class="container">
      <div class="logo">
        <!-- Add your logo here -->
      </div>
      <a href="#" class="contact-button">Contact</a>
    </header>
    <router-view></router-view>
    <Header />
    <Hero />
    <About />
    <Services />
    <!-- Add more components here -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Hero,
    About,
    Services,
    Footer
  }
}
</script>
