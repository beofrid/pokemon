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

    <section class="pokedexInterface">
    <div class="pkdx2" id="pokedexMiddle"></div>
    <img src="../assets/pokedexDraw.png" class="pkdx1 transition" id="pokedexTop" alt="Pokedex_Interface">    
        
        <div id="pokedexContent" class="pokedexContent pokedexLaunch transition">
            
            <section class="idContainer font1">
                <div class="font1" id="name"></div>
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
                <div class="stats2" id="sepcialAttack"></div>
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
        </div> 

    <img src="../assets/pokedexDrawBottom.png" class="pkdx3 transition" id="pokedexBottom" alt="Pokedex_Interface"/>
   
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

.transition {
    transition: transform ease-out 3s;
}
.opacity {
    opacity: 0;
}
.pkdx1 {
    position: fixed;
    margin-left: -2px;
    z-index: 1;
    
        /* display: none; */

}
.pkdx2 {
    position:fixed;
    width: 100px;
    height: 108px;
    margin-left: 115px;
    margin-top: 88px;
    border-radius: 50%;
    background-image: radial-gradient(white, lightblue, lightblue, blue, black);
    background-size: 300% 300%;
    box-shadow: 4px 4px 5px white,
        4px 4px 15px blue,
        4px -4px 5px white,
        4px -4px 15px blue,
        -4px 4px 5px white,
        -4px 4px 15px blue,
        -4px -4px 5px white,
        -4px -4px 15px blue;
    transition: all 1s ease;
    z-index: 1;
    

}

.pkdx3 {
    position: fixed;
    margin-top: -256px;
    margin-left: -2px;
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

.pokedexInterface {
    
    width: 326px;
    min-height: 330px;
    max-height: 460px;
    
}
.pokedexContent{
    width: 326px;
    height: 400px;
    border-radius: 6%;
    background-image: linear-gradient(45deg, rgb(95, 95, 255), rgb(138, 182, 233));
    overflow: hidden;
    color: white;
    text-shadow: 1px 1px 1px black;
}

.pokedexLaunch {
    transform: translateY(-125px);
    filter: contrast(0%);
    }


.statsContainer {
    display: flex;
    justify-content: space-left;
    margin-top: 5px;
    
    }
.stats1 { 
    margin-left: 5px;
    background: purple;
    border: 2.5pt inset gray;
    width: 160px;
    min-width: 90px;
    transform: skew(-8deg);
    box-shadow: inset 3px 3px 5px rgb(80, 9, 9),
        inset -3px -3px 5px rgb(247, 94, 119),
        -1px -1px 3px white;
}
.stats2 {
    border: 1pt solid red;
    background-image: linear-gradient(90deg, gold, peru, orange);
    transform: skew(-8deg);
    box-shadow: inset 3px 3px 5px rgb(80, 9, 9),
        inset -3px -3px 5px rgb(247, 94, 119),
        -1px -1px 3px white;
    line-height: 26px;
    margin-left: 5px;
    font-size: 6pt;
    text-align: center;
    }

</style>