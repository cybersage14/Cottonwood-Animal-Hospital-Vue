<template>
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Book an Appointment?</h2>
        <p>Contact us today to schedule an appointment for your pet.</p>
        <a href="#" class="cta-button">Book Now</a>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CallToActionSection",
  };
  </script>
  
  <style scoped>
  .cta-section {
    text-align: center;
    background-color: #3498db;
    color: #fff;
    padding: 50px 0;
  }
  
  .cta-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #2980b9;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #1a5f86;
  }
  </style>
  