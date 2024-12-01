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
      component: () => import('../views/DayContent.vue'),
      beforeEnter: (to, from, next) => {
        const dayNumber = parseInt(to.params.number as string);
        const today = new Date();
        const isDecember = today.getMonth() === 11;
        const currentDay = today.getDate();

        if (isDecember && currentDay >= dayNumber) {
          next(); // Allow access
        } else {
          alert(`This content will unlock on December ${dayNumber}th!`);
          next('/'); // Redirect to home
        }
      }
    },
    {
      path: '/story/:id',
      name: 'Story',
      component: StoryPage,
      beforeEnter: (to, from, next) => {
        const storyId = parseInt(to.params.id as string);
        const today = new Date();
        const isDecember = today.getMonth() === 11;
        const currentDay = today.getDate();

        if (isDecember && currentDay >= storyId) {
          next(); // Allow access
        } else {
          alert(`This story will unlock on December ${storyId}th!`);
          next('/'); // Redirect to home
        }
      }
    }
  ],
});

export default router;
