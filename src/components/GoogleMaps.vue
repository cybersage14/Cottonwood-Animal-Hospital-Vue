<!-- This component displays a Google Map with a marker at a specific location -->
<template>
  <!-- Wraps the entire component -->
    <section class="google-maps-section">
      <!-- Location and contact details -->      
        <div class="location-details">
            <h2>Our Location</h2>
            <p>4102 Katella Ave, Los Alamitos, CA 90720</p>
            <h3>Contact</h3>
            <p><a href="tel:5623726642">(562)-372-6642</a></p>
            <p><a href="mailto:info@littlecottonwoodah.com">info@littlecottonwoodah.com</a></p>
            <h3>Hours of Operation</h3>
            <p>Mon-Fri: 8am-6pm</p>
            <p>Sat: 8am-12pm</p>
            <p>Sun: Closed</p>
        </div>
        <!-- Container for the Google Map itself and the ID used to initialize the map -->
        <div id="map"></div>
    </section>
</template>

<script>
/* global google */

export default {
  // this section imports the Google Maps API and initializes the map when the component is mounted to the DOM
  name: "GoogleMaps",
  async mounted() {
    try {
      await this.loadScript(); // wait for the script to load
      this.initGoogleMaps(); // initialize the map once the script is loaded
    } catch (error) {
      console.error('Failed to load Google Maps script:', error); // log any errors
    }
  },
  methods: {
    // this section loads the Google Maps API
    loadScript() {
      return new Promise((resolve, reject) => {
        // if the Google Maps API is already loaded, resolve the promise
        if (window.google) {
          resolve();
          return;
        }
        // otherwise, create a script element and add it to the DOM
        const script = document.createElement('script'); // create the script element
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCljbibRJZ-nGsvB3kPKHrASADENDZe2rI&callback=initGoogleMapsApi`; 
        script.async = true; // this allows the script to load asynchronously
        script.defer = true; // this allows the script to be executed in the order it was added to the DOM
        script.onerror = reject; // if there's an error, reject the promise
        document.head.appendChild(script); // add the script to the head of the document

        // this section resolves the promise once the Google Maps API is loaded to make sure map is only initialized after API is loaded
        window.initGoogleMapsApi = () => {
          resolve();
          delete window.initGoogleMapsApi;
        };
      });
    },
    // this section initializes the map with the correct location and zoom level
    initGoogleMaps() {
      const location = { lat: 33.802675, lng: -118.061435 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location,
      });
      // this section adds a marker to the map
      new google.maps.Marker({
        position: location,
        map: map,
      });
    },
  },
};
</script>

<style scoped>
/* this section styles the Google Maps component */
.google-maps-section {
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 2rem;
padding: 2rem 0;
}

/* this section styles the location details */
.location-details {
flex: 1;
max-width: 40%;
}

/* this section styles the map */
#map {
flex: 2;
height: 400px;
max-width: 75%;
border-radius: 5px;
}

/* this section makes the map more responsive */
@media screen and (max-width: 1024px) {
.google-maps-section {
    flex-direction: column;
    align-items: center;
}

/* this section makes the location details responsive */
.location-details,
#map {
    max-width: 100%;
}

/* this section makes the map more responsive */
#map {
    margin-top: 2rem;
}
}
</style>
