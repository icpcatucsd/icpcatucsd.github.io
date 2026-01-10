import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Teams from '@/views/Teams.vue'
import MeetingSchedule from '@/views/Schedule.vue'
import TeamSelection from '@/views/TeamSelection.vue'
import History from '@/views/History.vue'
import Resources from '@/views/Resources.vue'
import ContactUs from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams,
    },
    {
      path: '/meeting-schedule',
      name: 'meeting-schedule',
      component: MeetingSchedule,
    },
    {
      path: '/team-selection',
      name: 'team-selection',
      component: TeamSelection,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  // Scroll to top on navigation; restore scroll on back/forward
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
