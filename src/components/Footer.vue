<template>
  <footer>
    <div class="footer-content">
      <p>This website is NOT the official website of Little Cottonwood Animal Hospital &copy; 2023</p>
    </div>
    <div class="social-buttons">
      <a href="https://www.snapchat.com" target="_blank">
        <button class="snapchat-button">Snapchat</button>
      </a>
      <a href="https://www.instagram.com/littlecottonwoodah" target="_blank">
        <button class="instagram-button">Instagram</button>
      </a>
      <a href="https://www.facebook.com/LittleCottonwoodAH" target="_blank">
        <button class="facebook-button">Facebook</button>
      </a>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
footer {
  background-color: #2980b9;
  color: white;
  padding: 40px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.footer-content p {
  font-size: 16px;
  margin: 0;
  color: white;
}

/* general social buttons */
.social-buttons button {
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.snapchat-button {
  background-color: #FFFC00;
  color: #000000;
}

.instagram-button {
  background-color: #C13584;
  color: #ffffff;
}

.facebook-button {
  background-color: #3498db;
  color: #ffffff;
}

.social-buttons button:hover {
  /* Add a general hover effect for all buttons, like making them slightly darker */
  filter: brightness(85%);
}
</style>

