// Import Vue.js
import { createApp } from 'vue';

// Import the main App component
import App from './App.vue';

// Import the custom CSS styles
import './assets/css/styles.css';

// Import the router
import router from './router';

// Create a new Vue instance and mount it to the #app element in the DOM
const app = createApp(App);

app.use(router);

// Add this code for smooth scrolling
app.directive('smooth-scroll', {
  beforeMount(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(el.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },
});

app.mount('#app');
