<template>
  <section id="services" class="section" style="margin-top: 150px;">
    <section class="duke-hero">
      <h1>In Loving Memory of Duke</h1>
    </section>
    <section class="duke-tribute">
      <p>
        Duke was a beloved friend and companion who brought joy and happiness to
        everyone around him. He will always be remembered for his playful spirit,
        loyalty, and unconditional love. May his memory live on in our hearts
        forever.
      </p>
    </section>
    <section class="duke-gallery">
      <h2>Memories of Duke</h2>
      <div class="duke-gallery-container">
        <img src="@/assets/img/DukeGallery/duke.jpg" alt="Duke image 1" />
        <img src="@/assets/img/DukeGallery/duke1.jpg" alt="Duke image 2" />
        <img src="@/assets/img/DukeGallery/duke2.jpg" alt="Duke image 3" />
        <img src="@/assets/img/DukeGallery/duke3.jpg" alt="Duke image 4" />
        <img src="@/assets/img/DukeGallery/duke4.jpg" alt="Duke image 5" />
        <img src="@/assets/img/DukeGallery/duke5.jpg" alt="Duke image 6" />
        <img src="@/assets/img/DukeGallery/duke6.jpg" alt="Duke image 7" />
        <img src="@/assets/img/DukeGallery/duke7.jpg" alt="Duke image 8" />
        <img src="@/assets/img/DukeGallery/duke8.jpg" alt="Duke image 8" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "DukePage",
};
</script>

<style scoped>
/* Modify the following styles to match your desired color palette and design */
.duke-hero {
  background-image: url("@/assets/img/DukeGallery/DukeMain.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.duke-hero h1 {
  color: #ffffff;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.duke-tribute {
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
}

.duke-gallery {
  padding: 2rem 0;
}

.duke-gallery h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.duke-gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
}

.duke-gallery img {
  width: 100%;
  height: auto;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
}

@media screen and (min-width: 768px) {
  .duke-hero {
    background-size: cover;
  }
}
</style>