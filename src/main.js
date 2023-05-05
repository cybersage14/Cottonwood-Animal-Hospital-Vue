// Import the createApp function from Vue.js
import { createApp } from 'vue';

// Import the main App component
import App from './App.vue';

// Import the custom global CSS styles
import './assets/css/styles.css';

// Import the router
import router from './router';

// Create a new Vue instance and mount it to the #app element in the DOM
const app = createApp(App);

// Mount the router to the Vue instance to allow for navigation
app.use(router);

// This portion controls the smooth scrolling
app.directive('smooth-scroll', 
{
  beforeMount(el) 
  {
    // listens for a click event on the element
    el.addEventListener('click', (e) => 
    {
      const targetHref = el.getAttribute('href');
      const targetElement = document.querySelector(targetHref);

      // if the target element exists and the href starts with a #, then prevent the default behavior and scroll to the element
      if (targetElement && targetHref.startsWith('#')) 
      {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } 

      // if the target element exists and the href starts with a /, then prevent the default behavior and navigate to the route
      else if (targetHref.startsWith('/')) 
      {
        e.preventDefault();
        router.push(targetHref);
      }
    });
  },
});

app.mount('#app');
