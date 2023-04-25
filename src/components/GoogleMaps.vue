<template>
    <section class="google-maps-section">
        <div class="location-details">
            <h2>Our Location</h2>
            <p>123 Main St, Los Alamitos, CA 90720</p>
            <h3>Contact</h3>
            <p>(562) 123-4567</p>
            <h3>Hours of Operation</h3>
            <p>Mon-Fri: 8am-6pm</p>
            <p>Sat: 9am-3pm</p>
            <p>Sun: Closed</p>
        </div>
        <div id="map"></div>
    </section>
</template>

<script>
/* global google */

export default {
  name: "GoogleMaps",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.803073, lng: -118.073593 },
        zoom: 16,
      });

      // eslint-disable-next-line no-unused-vars
      const marker = new google.maps.Marker({
        position: { lat: 33.803073, lng: -118.073593 },
        map,
        title: "Little Cottonwood Animal Hospital",
      });
    },
  },
};
</script>

<style scoped>
.google-maps-section {
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 2rem;
padding: 2rem 0;
}

.location-details {
flex: 1;
max-width: 40%;
}

#map {
flex: 2;
height: 400px;
max-width: 60%;
border-radius: 5px;
}

@media screen and (max-width: 1024px) {
.google-maps-section {
    flex-direction: column;
    align-items: center;
}

.location-details,
#map {
    max-width: 100%;
}

#map {
    margin-top: 2rem;
}
}
</style>
  