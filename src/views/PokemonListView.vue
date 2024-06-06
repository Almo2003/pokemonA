<template>
  <div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <h1 class="text-primary">¡Pokemones atrapados!</h1>
      </div>
    </div>

    <div class="row p-3 d-flex justify-content-center">
      <div v-for="pokemon in displayedPokemons" :key="pokemon.name" class="col-sm-10">
        <div @click="watchDetails(pokemon.name)" class="card d-flex justify-content-center align-items-center mb-3">
          <div class="card-title">
            <img :src="getPokemonImageUrl(pokemon.id)" :alt="'Imagen de ' + pokemon.name" class="pokemon-image" />
            <h4>{{ pokemon.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav aria-label="Page navigation" class="navegator">
    <ul class="pagination mt-3 justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="prevPage">Ant</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" :class="{ active: currentPage === 1 }" @click.prevent="goToPage(1)">1</a>
      </li>
      <li class="page-item" v-if="currentPage > 2">
        <span class="page-link">...</span>
      </li>
      <li class="page-item" v-if="currentPage > 1">
        <a class="page-link" href="#" :class="{ active: currentPage !== 1 }" @click.prevent="goToPage(currentPage)">{{ currentPage }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === numPages }">
        <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PokemonListView',
  props: {
    id: Number,
  },
  data() {
    return {
      pokemons: [],
      currentPage: 1,
      numPages: 2,
      perPage: 10, // Number of Pokemon per page
    };
  },
  computed: {
    displayedPokemons() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = Math.min(startIndex + this.perPage, this.pokemons.length);
      return this.pokemons.slice(startIndex, endIndex);
    },
  },
  async created() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151'); // Get first 151 Pokemons
    const pokemonResults = response.data.results;

    const pokemonData = await Promise.all(
      pokemonResults.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        return {
          id: pokemonDetails.data.id,
          name: pokemonDetails.data.name,
          // Other details you might need
        };
      })
    );

    this.pokemons = pokemonData;
    this.numPages = Math.ceil(this.pokemons.length / this.perPage);
  },
  methods: {
    getPokemonImageUrl(id) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    },
    watchDetails(name) {
      this.$router.push({ name: 'PokemonDetail', params: { name } });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.numPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
}

.navbar ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar li {
  position: relative;
  margin: 0 15px;
}

.navbar li:not(:last-child)::before {
  content: "";
  position: fixed;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
  border-right: 1px solid #000;
}

.navbar a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

.navbar a:hover {
  color: #007bff;
}

.pagination.mt-3.justify-content-center {
  margin-bottom: 10%;
  background-color: #232d35;
  border-color: #232d35;
}

.card {
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center
}

.pokemon-image {
  width: 100%;
  height: auto;
}
</style>
