import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BrowseLocals from '../views/BrowseLocals.vue'
import LocalsLandingPage from '../views/LocalsLandingPage'
import LocalProfileEdit from '../views/LocalProfileEdit'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/locals',
    name: 'BrowseLocals',
    component: BrowseLocals
  },
  {
    path: '/become-a-local',
    name: 'LocalsLandingPage',
    component: LocalsLandingPage
  },
  {
    path: '/local/edit',
    name: 'LocalProfileEdit',
    component: LocalProfileEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
