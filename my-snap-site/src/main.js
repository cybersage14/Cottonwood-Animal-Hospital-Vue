// Import Vue.js
import Vue from 'vue';

// Import the main App component
import App from './App.vue';

// Import the custom CSS styles
import './assets/css/styles.css';

// Disable the production tip (you can keep this line for development purposes)
Vue.config.productionTip = false;

// Create a new Vue instance and mount it to the #app element in the DOM
new Vue({
  render: (h) => h(App),
}).$mount('#app');
