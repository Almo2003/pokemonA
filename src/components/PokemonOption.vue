<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemonList" 
            :key="pokemon.id"
            @click="$emit('seleccionado', pokemon.id)">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
    name: 'PokemonOption',
    props: {
        pokemonList: Array
    }
  }  
</script>
    
<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: #eeff00;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 250px;
    transition: 0.5s ease;
}
 li:hover{
    background-color: rgb(255, 255, 255);
 }
.options-container{
    display: flex;
    justify-content: center;
 }
</style>