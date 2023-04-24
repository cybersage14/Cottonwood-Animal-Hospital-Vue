<template>
  <section id="AboutSection" class="section" style="margin-top: 80px;">
    <h2>About Little Cottonwood Animal Hospital</h2>
    <p>
      Little Cottonwood Animal Hospital is a full-service veterinary hospital located in the heart of Sandy, Utah. Our dedicated staff of veterinarians, technicians, and support staff are committed to providing compassionate and exceptional care to your pets. We offer a wide range of services, including preventive care, diagnostics, surgery, dental care, and more. Our state-of-the-art facility is equipped with the latest technology to ensure your pet receives the best possible care.
    </p>
    <veterinarians />
  </section>
</template>

<script>
import Veterinarians from "@/components/Veterinarians.vue";

export default {
  name: "AboutPage",
  components: {
    Veterinarians,
  },
};
</script>


<style scoped>
.section {
  text-align: center;
  padding: 50px 0;
}

h2 {
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
}
</style>
