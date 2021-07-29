import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Menu from '../views/pages/Menu.vue'
import AnswerQuiz from '../views/pages/AnswerQuiz.vue'
import CreateQuiz from '../views/pages/CreateQuiz.vue'
import MultiplePlayers from '../views/pages/MultiplePlayers.vue'
import OnePlayer from '../views/pages/OnePlayer.vue'
import Host from '../views/pages/Host.vue'
import Guest from '../views/pages/Guest.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Menu
  },
  {
    path: '/createQuiz',
    component: CreateQuiz
  },
  {
    path: '/answerQuiz',
    component: AnswerQuiz
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/multiplePlayers',
    component: MultiplePlayers
  },
  {
    path: '/onePlayer',
    component: OnePlayer
  },
  {
    path: '/host',
    component: Host
  },
  {
    path: '/guest',
    component: Guest
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
