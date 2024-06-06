
<template>
  <div v-if="pokemon" class="pokemon-detail">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" :alt="'Imagen de ' + pokemon.name" class="pokemon-image"/>
    <p><strong>Altura:</strong> {{ pokemon.height }}</p>
    <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
    <p><strong>Tipo:</strong>
      <span v-for="(type, index) in pokemon.types" :key="index" class="pokemon-type">
        {{ type.type.name }}<span v-if="index < pokemon.types.length - 1">, </span>
      </span>
    </p>
    <p><strong>Habilidades:</strong>
      <span v-for="(ability, index) in pokemon.abilities" :key="index" class="pokemon-ability">
        {{ ability.ability.name }}<span v-if="index < pokemon.abilities.length - 1">, </span>
      </span>
    </p>
    <p><strong>Movimientos:</strong>
      <span v-for="(move, index) in displayedMoves" :key="index" class="pokemon-move">
        {{ move.move.name }}<span v-if="index < displayedMoves.length - 1">, </span>
      </span>
    </p>
  </div>
  </template>

<script>
import PokemonServices from '@/services/PokemonServices';

export default {
  name: 'PokemonDetailView',
  props: ['name'],
  data() {
    return {
      pokemon: null,
      displayedMoves: [],
    };
  },
  async created() {
    try {
      const pokemonData = await PokemonServices.getPokemonsDetail(this.name);
      this.pokemon = pokemonData;

      // Asegúrate de que pokemonData y sus propiedades existan antes de usarlas
      if (this.pokemon && this.pokemon.moves) {
        this.displayedMoves = this.pokemon.moves.slice(0, 10); // Limitar a los primeros 10 movimientos para simplicidad
      }
    } catch (error) {
      console.error('Error al obtener los detalles del Pokémon:', error);
    }
  },
};
</script>

<style scoped>
.pokemon-detail {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

.pokemon-detail h1 {
  font-size: 2em;
  color: #333;
}

.pokemon-image {
  width: 150px;
  height: auto;
  margin: 20px 0;
}

.pokemon-detail p {
  font-size: 1.2em;
  color: #555;
}

.pokemon-detail p strong {
  color: #333;
}

.pokemon-type, .pokemon-ability, .pokemon-move {
  font-weight: bold;
  color: #444;
}

.pokemon-type {
  background-color: #f5a623;
  border-radius: 5px;
  padding: 2px 5px;
  margin: 0 2px;
}

.pokemon-ability {
  background-color: #4a90e2;
  border-radius: 5px;
  padding: 2px 5px;
  margin: 0 2px;
}

.pokemon-move {
  background-color: #50e3c2;
  border-radius: 5px;
  padding: 2px 5px;
  margin: 0 2px;
}
</style>



  