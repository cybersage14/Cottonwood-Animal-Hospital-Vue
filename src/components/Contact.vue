<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <div class="container">
      <div class="contact-info">
        <div class="hours">
          <h4>Hours</h4>
          <p>Monday - Friday: 8am - 6pm</p>
          <p>Saturday: 8am - 12pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div class="address">
          <h4>Address</h4>
          <p>4102 Katella Ave</p>
          <p>Los Alamitos, CA</p>
          <p>90720</p>
        </div>
        <div class="phone-email">
          <h4>Phone</h4>
          <p><a href="tel:5623726642">(562)-372-6642</a></p>
          <h4>Email</h4>
          <p><a href="mailto:info@littlecottonwoodah.com">info@littlecottonwoodah.com</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 50px 0;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 2rem;
}

.hours,
.address,
.phone-email {
  text-align: left;
}

.phone-email a {
  text-decoration: none;
  color: #3498db;
}

.phone-email a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-info {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>