import { createRouter, createWebHistory } from "vue-router";
import MapView from "@/modules/map/views/MapView.vue";
import BuildingView from "@/modules/building/views/BuildingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "map",
      component: MapView,
    },
    {
      path: "/building",
      name: "building",
      component: BuildingView,
    },
  ],
});

export default router;
