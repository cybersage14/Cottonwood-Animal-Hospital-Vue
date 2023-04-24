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
  
  h2 {
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .cta-button {
    display: inline-block;
    padding: 15px 30px;
    background-color: #2980b9;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #1a5f86;
  }
  </style>
  
   