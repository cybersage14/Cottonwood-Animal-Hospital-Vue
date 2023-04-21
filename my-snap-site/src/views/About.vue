<template>
    <div class="about">
      <h2>About {{ businessName }}</h2>
      <p>{{ businessName }} has been providing quality products and services to the LA community for over 10 years. Our mission is to provide our customers with the best possible experience and exceed their expectations.</p>
      <h3>Our Team</h3>
      <p>Our team of experts has over 50 years of combined experience in the industry. We are passionate about what we do and are dedicated to providing the highest level of service to our customers.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
    props: ['businessName']
  }
  </script>
  
  <style scoped>
  .about {
    margin: 20px;
  }
  </style>
  