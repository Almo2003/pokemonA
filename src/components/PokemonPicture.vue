<template>
    <div class="pokemon-container">
        <img  class="hidden-pokemon" 
            v-if="!showPokemon"
            :src="imgUrl" alt="" >
        <img  class="fade-in" 
            v-if="showPokemon"
            :src="imgUrl" alt="" >
    </div>
</template>
<script>
export default {
    name: 'PokemonPicture',
    props: {
        idPokemon: Number,
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imgUrl() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`;
        }
    }
}

</script>

<style scoped>
.pokemon-container {
    height: 200px;
    margin: 2rem;
}
img {
    height: 200px;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>