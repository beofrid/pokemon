<script lang="ts">
export default {
  data(){
    return{
      name: "stats"
      

     }
  } 
}
</script>

<template>

    <div class="container">
    <header></header>

    <section class="pokedex">
        <div class="pokemonName" id="name"></div>
        <div class="typeOfPokemon" id="pokemonType">type = </div>
        <img src="" id="img" alt="pokemon">

        <!-- Health Points -->
        <section class="statsContainer"> 
            <div class="stats">HP:</div>
            <div class="stats" id="hp"></div>
        </section>

        <!-- Attack -->
        <section class="statsContainer">
            <div class="stats">attack = </div>
            <div class="stats" id="attack"></div>
        </section>

        <!-- defense -->
        <section class="statsContainer">
            <div class="stats">defense = </div>
            <div class="stats" id="defense"><div class="defense"></div></div>

        </section>
        
        <!-- special-attack -->
        <section class="statsContainer">
            <div class="stats">special-attack = </div>
            <div class="stats" id="sepcialAttack"><div class="sepcialAttack"></div></div>
        
        </section>
        
        <!-- special-defense -->
        <section class="statsContainer">
            <div class="stats">special-defense = </div>
            <div class="stats" id="specialDefense"></div>

        </section>
        
        <!-- speed = -->
        <section class="statsContainer">
            <div class="stats">speed = </div>
            <div class="stats" id="speed"></div>

        </section>
        
        
        
        
        
        
    </section>

   <footer></footer>
  </div>
</template>


<style scoped>
.pokedex {
    width: 20vw;
    background-color: darkblue;
        overflow: hidden;

}
.statsContainer {
    display: flex;
    justify-content: space-between;
    
    }
.stats {
    border: 1pt solid black;
    width: 9vw;}
.defense {
    display: none;
    background: red;
    width: 1vw;
    height: 100%;
}
</style>