<template>
  <section id="AboutSection" class="section" style="margin-top: 50px;">
    <h2>About Little Cottonwood Animal Hospital</h2>
    <div class="container">
    <p>
      Little Cottonwood Animal Hospital is a Full-Service Small Animal Veterinary Hospital 
      located in Los Alamitos, California. We welcome both emergency cases as well as pets 
      in need of routine medical, surgical and dental care. Our dedicated staff of veterinarians, 
      technicians, and support staff are committed to providing compassionate and 
      exceptional care to your pets. We offer a wide range of services, including 
      preventive care, diagnostics, surgery, dental care, and more. Our state-of-the-art 
      facility is equipped with the latest technology to ensure your pet receives the best 
      possible care.
    </p>
    <p2>
      ESTABLISHED 2020
    </p2>
    <veterinarians />
  </div>
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

p2 { 
  color: rgb(126, 125, 125);
  font-size: 0.8rem;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
