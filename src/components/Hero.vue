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
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/img/home_page1.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  margin-top: 100px;
}

.hero h1 {
  color: white;
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  color: white;
  font-size: 24px;
  max-width: 800px;
  margin: 0 auto;
}

</style>
