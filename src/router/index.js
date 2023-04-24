import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';
import Contact from '../components/Contact.vue';
import Duke from '../components/Duke.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/duke', name: 'Duke', component: Duke},
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
