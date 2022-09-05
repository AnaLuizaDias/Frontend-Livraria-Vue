import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import AutorsView from "../views/AutorsView.vue";
import EditoraView from "../views/EditoraView.vue";
import CategoriaView from "../views/CategoriaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/autors",
      name: "autors",
      component: AutorsView,
    },
    {
      path: "/editora",
      name: "editora",
      component: EditoraView,
    },
    {
      path: "/categoria",
      name: "categoria",
      component: CategoriaView,
    },
  ],
});

export default router;
