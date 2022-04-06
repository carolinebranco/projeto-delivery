
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Pedidos from '../views/Pedidos.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
    component: Pedidos,
    needAuth: true
  },
  {
    path:'/Login',
    name:'Login',
    comoponent: Login,
    
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})





export default router
