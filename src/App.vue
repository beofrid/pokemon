
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
</script>



<style scoped>
.container{
  margin: 0 auto;
  margin-top: 50px;
  width: 700px;
  height: 900px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
.pokedexStyle {
  height: 600px;
}
.searchStyle{
    height: 900px;
}

@media (max-width: 800px) {
  .container {
    width: 100%;
    flex-direction: column; 
    margin: 0 auto;
    margin-top: 50px;
  }
  .searchStyle{
    margin-top: 150px;
  }
}
</style>
