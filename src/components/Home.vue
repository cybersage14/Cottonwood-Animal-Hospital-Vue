<template>
  <div class="main-content">
    <!-- Components included in the Home page -->
    <HeroSection />
    <ServicesSection />
    <CallToActionSection />
    <GoogleMapsSection />
    <AboutSection />
  </div>
</template>

<script>
// import components from other files
import HeroSection from './Hero.vue';
import ServicesSection from './Services.vue';
import AboutSection from './About.vue';
import CallToActionSection from './CallToAction.vue';
import GoogleMapsSection from "./GoogleMaps.vue";

export default 
{
  name: "HomePage",
  components: 
  {
    // Registering components used in the Home page
    HeroSection,
    ServicesSection,
    AboutSection,
    CallToActionSection,
    GoogleMapsSection,
  },
};
</script>

<style scoped>
/* Services section styles */
.services-section {
  text-align: center;
  padding: 50px 0;
}

/* Grid layout for services */
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Service card styles */
.service {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f8f8;
  text-align: center;
}

.service img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
}

.service h3 {
  margin-bottom: 10px;
}
</style>
