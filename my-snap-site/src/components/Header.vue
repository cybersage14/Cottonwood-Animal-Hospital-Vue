<template>
  <header class="fixed-header">
    <nav>
      <div class="logo-container">
        <!-- Add your logo here -->
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="Logo" class="logo" />
        </router-link>
      </div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <!-- Add more navigation links here -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 0;
  /* Add other styles as needed */
}
</style>
