import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StoryPage from '../views/StoryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/day/:number',
      name: 'DayContent',
      component: () => import('../views/DayContent.vue')
    },
    {
      path: '/story/:id',
      name: 'Story',
      component: StoryPage
    }
  ],
});

export default router;
