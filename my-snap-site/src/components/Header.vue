<template>
  <header :class="{ 'shrink': shrinkHeader }">
    <div class="logo">
      <a href="/"><img :src="logo" alt="Little Cottonwood Animal Hospital"></a>
  </div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
    </nav>
    <div class="contact-btn-container">
      <a href="/contact" class="contact-btn">Contact</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      shrinkHeader: false,
      logo: './img/logo.png',
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.shrinkHeader = window.scrollY > 60;
    },
  },
};
</script>

<style scoped>

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 0;
  /* Add other styles as needed */
}

.contact-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s;
}

.contact-btn:hover {
  background-color: #2980b9;
}
</style>
