<script>
export default {
  data(){
    return{ 
      name: "nomeDoPokemon",
     }
     
  } 
}
// const = document.getElement

</script>

<!-- <script setup>
 const:String = document.getElementById(myInput) as HTMLElement


</script> -->



<template>

    <div class="container">
    <form autocomplete="off" action="/action_page.php">
      <div class="autocomplete" style="width:300px;">
        <input id="myInput" type="text" name="Pokemon" placeholder="Pokemon">
      </div>
      <input type="button" id="button" value="Search">
      
    </form>
  </div>
</template>

<style scoped>
</style>
