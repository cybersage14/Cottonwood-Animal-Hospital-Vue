import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Home.vue";
import About from '../components/About.vue';
import Services from '../components/Services.vue';

const routes = [
  {path: "/", name: "Home", component: Home,},
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
