// This file defines the routes for the application and exports the router instance

// Import the createRouter function from Vue Router
import { createRouter, createWebHashHistory } from 'vue-router';

// Import the components that will be used to create the routes
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';
import Contact from '../components/Contact.vue';
import Duke from '../components/Duke.vue';

// Define the routes array for the application
// Each route has a path, name, and component
// The path is the URL path that will be used to access the component
// The name is a unique name for the route
// The component is the component that will be rendered when the path is accessed
const routes = 
[
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/duke', name: 'Duke', component: Duke}, // Add a name to the route for duke so that it can be accessed programmatically
  { path: '/contact', component: Contact },
];

// Create a new router instance 
// Set the mode to use hash-based history to allow for compatibility with GitHub Pages and other static site hosts
// Pass the routes array to the routes option
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Export the router instance to make it available to other parts of the application
export default router;
