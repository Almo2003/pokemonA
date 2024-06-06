import { createRouter, createWebHistory } from 'vue-router'
import PokemonListView from '../views/PokemonListView.vue'
import PokemonDetailView from '../views/PokemonDetailView.vue'
import PokemonPage from '../pages/PokemonPage.vue'
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonListView
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetail',
    component: PokemonDetailView,
    props: true
  },
  {
    path: '/pokemonpage',
    name: 'PokemonPage',
    component: PokemonPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
