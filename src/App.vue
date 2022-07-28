
<template>
  <div>
    <Pokedex></Pokedex>
    <search></search>
      
  
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

</style>
