<template>
    <section class="google-maps-section">
        <div class="location-details">
            <h2>Our Location</h2>
            <p>123 Main St, Los Alamitos, CA 90720</p>
            <h3>Contact</h3>
            <p><a href="tel:5623726642">(562)-372-6642</a></p>
            <p><a href="mailto:info@littlecottonwoodah.com">info@littlecottonwoodah.com</a></p>
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
  async mounted() {
    try {
      await this.loadScript();
      this.initGoogleMaps();
    } catch (error) {
      console.error('Failed to load Google Maps script:', error);
    }
  },
  methods: {
    loadScript() {
      return new Promise((resolve, reject) => {
        if (window.google) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCljbibRJZ-nGsvB3kPKHrASADENDZe2rI&callback=initGoogleMapsApi`;
        script.async = true;
        script.defer = true;
        script.onerror = reject;
        document.head.appendChild(script);

        window.initGoogleMapsApi = () => {
          resolve();
          delete window.initGoogleMapsApi;
        };
      });
    },
    initGoogleMaps() {
      const location = { lat: 33.802675, lng: -118.061435 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location,
      });
      new google.maps.Marker({
        position: location,
        map: map,
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
