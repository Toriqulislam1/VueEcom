import { createRouter, createWebHistory } from "vue-router";
// import Home from "/views/Frontend/Home.vue";
// import About from "/views/Frontend/About.vue";
import About from "@/views/Frontend/About.vue";
import Home from "@/views/Frontend/Home.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
