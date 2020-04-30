import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BrowseLocals from '../views/BrowseLocals.vue'
import LocalsLandingPage from '../views/LocalsLandingPage'
import LocalProfileEdit from '../views/LocalProfileEdit'
import LocalProfilePage from '../views/LocalProfilePage'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/locals/city/:city',
    name: 'BrowseLocals',
    component: BrowseLocals,
    props: true
  },
  {
    path: '/become-a-local',
    name: 'LocalsLandingPage',
    component: LocalsLandingPage
  },
  {
    path: '/local/edit/:id',
    name: 'LocalProfileEdit',
    component: LocalProfileEdit,
    props: true

  },
  {
    path: '/local/profile/:local_id',
    name: 'LocalProfilePage',
    component: LocalProfilePage,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
