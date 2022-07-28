<script lang="ts">
export default {
  data(){
    return{
      name: "nomeDoPokemon",
      type: "Tipo",
      id: Number
     }
  } 
}
</script>

<template>

    <div class="container">
    <header></header>

    <section>
        <div class="pokemonName" id="name">{{ name }}</div>
        <div class="typeOfPokemon" id="pokemonType">type = </div>
        <img src="" id="img" alt="pokemon">
        <div class="stats" id="hp">hp = </div>
        <div class="stats" id="attack">attack = </div>
        <div class="stats" id="defense">defense = </div>
        <div class="stats" id="sepcialAttack">special-attack = </div>
        <div class="stats" id="specialDefense">special-defense = </div>
        <div class="stats" id="speed">speed = </div>
        
    </section>

   <footer></footer>
  </div>
</template>

<style scoped>
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
