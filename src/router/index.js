import Vue from 'vue' 
import VueRouter from 'vue-router'
import GuessIndex from '../views/GuessIndex.vue' 
import GuessHome from '../views/GuessHome.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: "root", component: GuessIndex},
  {path: '/guess', name: "guess-index", component: GuessIndex},
  {path: '/home', name: "guess-home", component: GuessHome}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
