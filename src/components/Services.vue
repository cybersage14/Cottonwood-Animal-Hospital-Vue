<template>
  <section id="services" class="section" style="margin-top: 80px;">
    <h2>Services Offered</h2>
    <div class="services-container">
      <div class="service">
        <img src="@/assets/img/service1.jpg" alt="Service 1" />
        <h3>Preventive Care</h3>
          <p>
            We believe that prevention is better than cure. Our preventive care services include vaccinations, wellness exams, parasite prevention, and tailored health plans for your pet's unique needs.
          </p>
      </div>
      <div class="service">
        <img src="@/assets/img/service2.jpg" alt="Service 2" />
        <h3>Diagnostics</h3>
          <p>
            Our advanced diagnostic tools and technology allow us to detect and treat a wide range of illnesses and conditions early, ensuring the best possible outcome for your pet.
          </p>
      </div>
      <div class="service">
        <img src="@/assets/img/service3.jpg" alt="Service 3" />
        <h3>Surgery</h3>
          <p>
            Our skilled veterinarians are experienced in performing a variety of surgical procedures, from routine spays and neuters to more complex soft tissue and orthopedic surgeries.
          </p>
      </div>
      <div class="service">
        <img src="@/assets/img/service4.jpg" alt="Service 4" />
        <h3>Dental Care</h3>
          <p>
            Good oral health is crucial for your pet's overall well-being. Our comprehensive dental care services include dental cleanings, extractions, and preventive measures to keep your pet's mouth healthy and pain-free.
          </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
};
</script>

<style scoped>
.section {
  text-align: center;
  padding: 50px 0;
}

.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.service {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f8f8;
}

.service h3 {
  margin-bottom: 10px;
}
</style>
