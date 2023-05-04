<template>
  <!-- Create a contact section with a specific class -->
  <div class="contact">
    <h2>Contact Us</h2>
    <div class="container">
      <!-- Add contact information in a grid layout -->
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
// Export the ContactPage component
export default {
  name: "ContactPage",
};
</script>

<style scoped>
/* Define styles for the contact section */
.contact {
  text-align: center;
  padding: 50px 0;
}

/* Define the grid layout for contact-info */
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 2rem;
}

/* Align text to the left for hours, address, and phone-email sections */
.hours,
.address,
.phone-email {
  text-align: left;
}

/* Set styles for phone-email anchor tags */
.phone-email a {
  text-decoration: none;
  color: #3498db;
}

/* Add underline on hover for phone-email anchor tags */

.phone-email a:hover {
  text-decoration: underline;
}

/* Media query for screens with a max-width of 768px */
@media (max-width: 768px) {
  .contact-info {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>