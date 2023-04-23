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
      logo: "@/assets/img/logo.png",
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
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s;
}

header.shrink {
  padding: 10px;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.logo img {
  width: 150px;
  height: auto;
}

.contact-btn-container {
  display: flex;
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
