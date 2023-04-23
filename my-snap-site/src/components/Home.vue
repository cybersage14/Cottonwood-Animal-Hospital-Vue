<template>
    <div class="home">
        <header :class="{ shrink: shrinkHeader }">
            <!-- Add the header content here -->
        </header>
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <h1>Compassionate Veterinarians</h1>
          <p>Here for you and your pet's needs!.</p>
        </div>
      </section>
  
      <!-- Services Section -->
      <section class="services">
        <div class="container">
          <h2>Our Services</h2>
          <!-- Add the Services component here -->
          <Services />
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="cta">
        <div class="container">
          <h2>Ready to Book an Appointment?</h2>
          <p>Contact us today to schedule an appointment for your pet.</p>
          <a href="#" class="contact-button">Book Now</a>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Services from "./Services.vue";
  
  export default {
  name: "HomePage",
  components: {
    Services,
  },
  data() {
    return {
      shrinkHeader: false,
    };
  },
  methods: {
    handleScroll() {
      this.shrinkHeader = window.scrollY > 50;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
  