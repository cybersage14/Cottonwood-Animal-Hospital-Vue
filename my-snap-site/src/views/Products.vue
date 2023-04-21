<template>
    <div class="products">
      <h2>Our Products</h2>
      <ul>
        <li>
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis vitae magna pulvinar fermentum sed at nibh.</p>
          <img src="https://via.placeholder.com/150" alt="Product 1">
        </li>
        <li>
          <h3>Product 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis vitae magna pulvinar fermentum sed at nibh.</p>
          <img src="https://via.placeholder.com/150" alt="Product 2">
        </li>
        <li>
          <h3>Product 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis vitae magna pulvinar fermentum sed at nibh.</p>
          <img src="https://via.placeholder.com/150" alt="Product 3">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Products'
  }
  </script>
  
  <style scoped>
  .products {
    margin: 20px;
  }
  .products ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .products li {
    flex-basis: 30%;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .products li img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  </style>
  