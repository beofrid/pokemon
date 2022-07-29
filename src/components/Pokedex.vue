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
        <div class="pkdx2"></div>
        <img src="../assets/pokedexDraw.png" class="pkdx1" alt="Pokedex_Interface">
        <section class="idContainer font1">
            <div class="pokemonName font1" id="name"></div>
            <div class="typeOfPokemon font2" id="pokemonType">type = </div>
            <img src="/assets/notFound.png" id="img" alt="pokemon">
        </section>

        <!-- Health Points -->
        <section class="statsContainer font2"> 
            <div class="stats1">hp</div>
            <div class="stats2" id="hp"></div>
        </section>

        <!-- Attack -->
        <section class="statsContainer font2">
            <div class="stats1">attack </div>
            <div class="stats2" id="attack"></div>
        </section>

        <!-- defense -->
        <section class="statsContainer font2">
            <div class="stats1">defense</div>
            <div class="stats2" id="defense"></div>

        </section>
        
        <!-- special-attack -->
        <section class="statsContainer font2">
            <div class="stats1">special-attack</div>
            <div class="stats2" id="sepcialAttack"><div class="sepcialAttack"></div></div>
        
        </section>
        
        <!-- special-defense -->
        <section class="statsContainer font2">
            <div class="stats1">special-defense</div>
            <div class="stats2" id="specialDefense"></div>
        </section>
        
        <!-- speed = -->
        <section class="statsContainer font2">
            <div class="stats1">speed</div>
            <div class="stats2" id="speed"></div>
        </section>
        
        <img src="../assets/pokedexDraw.png" class="pkdx3" alt="Pokedex_Interface"/>
        
        
        
        
        
    </section>

   <footer></footer>
  </div>
</template>


<style scoped>
.idContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pkdx1 {
    position: fixed;
}
.pkdx2 {
    position:absolute;
    width: 100px;
    height: 108px;
    margin-left: 115px;
    margin-top: 88px;
    border-radius: 50%;
    background-image: radial-gradient(white, lightblue, lightblue, blue, black);
    background-size: 301% 300%;
    box-shadow: 4px 4px 8px white,
        4px -4px 8px white,
        -4px 4px 8px white,
        -4px -4px 8px white;
    transition: all 2s ease;
}

.pkdx3 {
    position: fixed;
    margin-top: -85px;
    transform: rotate(180deg);
    /* display: none; */
}
.font1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 13pt;
}
.font2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 8pt;
}

.pokedex {
    /* min-width: 300px;
    max-width:30px; */
    width: 330px;
    min-height: 330px;
    max-height: 460px;
    border-radius: 6%;
    background-image: linear-gradient(45deg, rgb(95, 95, 255), rgb(138, 182, 233));
    overflow: hidden;
    color: white;
    text-shadow: 1px 1px 1px black;

}
.statsContainer {
    display: flex;
    justify-content: space-left;
    margin-top: 5px;
    
    }
.stats1 { 
    margin-left: 5px;
    border: 1pt solid black;
    width: 160px;
    min-width: 90px;
}
.stats2 {
    /* border: 1pt solid red; */
    box-shadow: inset 3px 3px 5px rgb(80, 9, 9),
        inset -3px -3px 5px rgb(247, 94, 119),
        -1px -1px 3px white;
        line-height: 180%;
        margin-left: 2px;
        font-size: 6pt;
        text-align: center;
    }

</style>