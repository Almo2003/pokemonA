<template>
    <h2 v-if="pokemon === null">Cargando...</h2>
    <div v-if="pokemon !== null">
        <h1>¿Quien es este Pokemon?</h1>
      <pokemon-picture :idPokemon="pokemon.id" :showPokemon="showPokemon"></pokemon-picture>
      <pokemon-option :pokemonList="pokemons" @seleccionado="selectAnswer($event)" />
      <h2>{{ msg }}</h2>
      <button @click="newGame()">¿Vamos de nuevo?</button>
    </div>
  </template>
  
  <script>
  import PokemonOption from '../components/PokemonOption.vue';
  import PokemonPicture from '../components/PokemonPicture.vue';
  import getPokemonList from '@/helpers/PokemonOptionList';
  
  export default {
    name: 'PokemonPage',
  
    data() {
      return {
        pokemons: [],
        pokemon: null,
        showPokemon: false,
        msg: null,
        pokemonId: Number
      };
    },
  
    components: {
      PokemonOption,
      PokemonPicture,
    },
  
    methods: {
      async changePokemons() {
        this.pokemons = await getPokemonList();
        const idpokemonPicture = Math.floor(Math.random() * 4);
        this.pokemon = this.pokemons[idpokemonPicture];
      },
  
      selectAnswer(pokemonId) {
        this.showPokemon = true;
        if (pokemonId === this.pokemon.id) {
          this.msg = `¡Correcto!`;
          //this.msg = `¡Correcto! Es ${this.pokemon.name}`;
        } else {
          this.msg = `¡Incorrecto!`+
          `el pokemon es: ${this.pokemon.name}`;
        }
      },


      newGame(){
        this.pokemons = [];
        this.pokemon =  null;
        this.showPokemon = false;
        this.msg = null;
        this.changePokemons();   
        },
    },
    mounted() {
      this.changePokemons();
    },
  };
  </script>

<style lang="scss">
  button{
    border-radius: 10px;
    margin-bottom: 10px;
    width: 250px;
    transition: 0.5s ease;
  }

  button:hover{
    background-color: #eeff00;
  }


</style>
    