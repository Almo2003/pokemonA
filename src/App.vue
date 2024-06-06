<template>
  <div>
    <div class="img-title-container">
      <img class="logazo":src="require('@/assets/Pokemon-logito.png')" alt="Pokemon" width="70%" />
    </div>
    <div class="subimg-title-container">
      <img class="sublogazo":src="require('@/assets/entrenador-pokemon.png')" alt="Pokemon" width="20%" />
    </div>
    <nav class="nav-home">
      <ul>
        <li><router-link to="/">Mis pokemones<img class="mypokemons":src="require('@/assets/juegos.png')" alt="Pokemon" width="60%" /></router-link></li>
        <li><img class="divisor":src="require('@/assets/linea-vertical.png')" alt="Pokemon" width="70%" /></li>
        <li><router-link to="/PokemonPage">¡Juguemos!<img class="mygame":src="require('@/assets/juguemos.png')" alt="Pokemon" width="60%" /></router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>



<style lang="scss">
#app {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  text-align: center;
  color: #ffffff;
  background-color: #232d35;
}

.subimg-title-container {
  margin-bottom: 0;
}

.divisor {
  transform: scaleY(2);
  padding: 0;
}

.mygame {
  margin-top: 10px;
}

.nav-home ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  background-color: #f30909;
  border-radius: 15px;
  margin: 4%;
  padding: 2%;
  border: solid 3px;
  border-color: #ffe818;

  li {
    padding: 0 5px;
  }

  a {
    font-weight: bold;
    color: #000000;
    //font-size: 15px;
    text-decoration: none;
    transition: 0.5s ease;
    cursor: pointer;

    &.router-link-exact-active {
      color: #ffe818;
      transition: 0.5s ease;
    }
    &.router-link-exact-active:hover {
      color: #ffe818;
    }
  }
}
</style>
