<template>
    <footer>
      <div class="footer-content">
        <p>Little Cottonwood Animal Hospital &copy; 2023</p>
        <!-- Add more footer content here -->
      </div>
      <div class="social-buttons">
        <a href="https://www.instagram.com/littlecottonwoodah" target="_blank">
          <button>Instagram</button>
        </a>
        <a href="https://www.snapchat.com" target="_blank">
          <button>Snapchat</button>
        </a>
        <a href="https://www.facebook.com/LittleCottonwoodAH" target="_blank">
          <button>Facebook</button>
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
  background-color: #3e6da3;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-logo img {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-copyright {
  font-size: 14px;
}
</style>
