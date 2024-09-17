import { createRouter, createWebHistory } from 'vue-router';
import calculocalificaciones from "@/views/calculocalificaciones.vue";
import FormularioRegistro from "@/views/FormularioRegistro.vue";
import construccion from "@/views/construccion.vue";


const routes = [
  {
    path: "/",
    name: "calculocalificaciones",
    component: calculocalificaciones,
  },
  {
    path: "/FormularioRegistro",
    name: "FormularioRegistro",
    component: FormularioRegistro,
  },
    {
    path: "/construccion",
    name: "construccion",
    component: construccion,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;