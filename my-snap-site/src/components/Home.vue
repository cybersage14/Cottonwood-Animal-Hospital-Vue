<template>
  <div class="main-content">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <CallToActionSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from './Hero.vue';
import ServicesSection from './Services.vue';
import AboutSection from './About.vue';
import CallToActionSection from './CallToAction.vue';
import ContactSection from './Contact.vue';

export default {
  name: "HomePage",
  components: {
    HeroSection,
    ServicesSection,
    AboutSection,
    CallToActionSection,
    ContactSection,
  },
};
</script>

<style scoped>
.services-section {
  text-align: center;
  padding: 50px 0;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

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
