<template>
    <div class="home">
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
  name: 'HomePage', // Add this line to change the component name
  components: {
    Services,
  },
};
</script>
  