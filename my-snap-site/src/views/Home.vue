<template>
    <div class="home">
      <h2>Welcome to our website!</h2>
      <p>Here at our small business in LA, we offer a variety of products and services to meet your needs. Explore our website to learn more!</p>
      <button><a href="https://example.com">Visit our online store</a></button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home {
    margin: 20px;
    text-align: center;
  }
  .home h2 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  .home p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .home button {
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 5px;
  }
  </style>
  