
<template>
  <div class="container">
    <Pokedex class="pokedexStyle"></Pokedex>
    <search class="searchStyle"></search>
      
  
  </div>

</template>


<script>
import Pokedex from "./components/Pokedex.vue";
import search from "./components/search.vue";
export default {
  name: "App",
  components: {
    search,
    Pokedex
   
    
},
}
// console.log(Pokedex)



</script>



<style scoped>
.container{
  width: 50vw;
  height: 50vh;
  background-color: brown;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
.pokedexStyle {
  flex-grow: 2;
  }
.searchStyle{
  background: pink
  }
</style>
