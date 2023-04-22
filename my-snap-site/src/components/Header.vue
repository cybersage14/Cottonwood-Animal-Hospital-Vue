<template>
    <div class="header">
      <header>
        <img src="../assets/logo.png" alt="Business Logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </div>
  </template>
  
  <style scoped>
  .header {
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }
  
  img {
    height: 50px;
  }
  
  nav ul {
    display: flex;
    list-style: none;
  }
  
  nav ul li {
    margin: 0 10px;
  }
  
  nav ul li a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
  }
  </style>
  