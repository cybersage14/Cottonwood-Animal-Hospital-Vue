<template>
  <header :class="{ 'shrink': shrinkHeader }">
    <!-- Logo section -->
    <div class="logo">
      <router-link to="/"><img :src="logo" alt="Little Cottonwood Animal Hospital"></router-link>
    </div>
    <!-- Navigation section -->
    <nav>
      <ul>
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/services" class="nav-link">Services</router-link></li>
        <li><router-link to="/duke">In Memory of Duke</router-link></li>
      </ul>
    </nav>
    <!-- Contact button container -->
    <div class="contact-btn-container">
      <router-link to="/contact" class="contact-btn">Contact</router-link>
    </div>
  </header>
</template>

<script>
export default 
{
  // HeaderComponent for the header
  name: "HeaderComponent",
  data() 
  {
    return {
      shrinkHeader: false,
      logo: require('@/assets/img/logo.png'),
    };
  },
  // this section allows the header to shrink when scrolling
  mounted() 
  {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() 
  {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: 
  {
    // Handle scroll event to shrink header
    handleScroll() 
    {
      this.shrinkHeader = window.scrollY > 60;
    },
  },
};
</script>

<style scoped>
/* Header styles */
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

/* Navigation styles */
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

/* Logo styles */
.logo img {
  width: 150px;
  height: auto;
}

/* Contact button container styles */
.contact-btn-container {
  display: flex;
  margin-right: 20px;
}

/* Contact button styles */
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
