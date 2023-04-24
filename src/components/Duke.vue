<template>
  <section id="services" class="section" style="margin-top: 50px;">
  <div class="duke">
    <h1>In Loving Memory of Duke</h1>
    <img class="duke-main-image" src="@/assets/img/DukeGallery/DukeMain.jpg" alt="Duke, the beloved Doberman" />
    <p>Duke was a loving and loyal Doberman who brought joy and happiness to our lives. He will be forever missed and cherished in our hearts. This website is dedicated to his memory and the love he shared with everyone he met.</p>
    <h3>Share Your Memories of Duke</h3>
    <p>If you have any stories, photos, or memories of Duke that you'd like to share, please feel free to email them to us at: <a href="mailto:memories@dukesmemory.com">memories@dukesmemory.com</a>.</p>
    <div class="image-gallery">
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
  </div>
</section>
</template>

<script>
export default {
  name: "DukePage",
};
</script>
<style scoped>
.duke {
  padding: 50px 0;
  text-align: center;
}

h1 {
  margin-bottom: 30px;
  color : #000000;
}

.duke-main-image {
  width: 50%; /* Adjust the size as needed */
  margin: 0 auto;
  display: block;
}

.duke h3 {
  margin: 30px 0 15px;
}

/* Add the following styles for the image gallery */
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;
}

.image-gallery img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .duke {
    padding: 10px;
  }
}
</style>
