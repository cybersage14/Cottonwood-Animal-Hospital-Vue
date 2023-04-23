<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Little Cottonwood Animal Hospital</h1>
      <p>
        Your pet's health is our priority. We're dedicated to providing the highest quality care in a warm and friendly environment.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.hero {
  background-image: url('@/assets/img/home_page1.jpg'); /* Replace this path with the actual path to your hero image */
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}
</style>
