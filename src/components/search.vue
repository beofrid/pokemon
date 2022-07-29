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




<template>

    <section class="container">
    <form autocomplete="off" action="/action_page.php">
      <section class="autocomplete" style="width:300px;">
        <input id="myInput" class="input" type="text" name="Pokemon" placeholder="Pokemon">
      </section>
      <input type="button" class="searchButton" id="button" value="Search">
      
    </form>
  </section>
</template>

<style scoped>
.hidden{
  display: none;
}

*{
  color: white;
  font-family: 'Press Start 2P', cursive;
  font-size: 10pt;
  }
.autocomplete {
  position: relative;
  display: inline-block;
}
.searchButton {
  margin: 0 auto;
  background: rgb(29, 29, 29);
  color:#d4d4d4;
  cursor: pointer;
}
input {
  border: 1px solid transparent;
  background-color: rgb(29, 29, 29);
  padding: 10px;
  font-size: 16px;
}

input[type=text] {
  background-color:rgb(29, 29, 29);
  width: 90%;
}

input[type=submit] {
  background-color: DodgerBlue;
  color: #fff;
  cursor: pointer;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete.div {
  padding: 10px;
  cursor: pointer;
  background-color: rgb(97, 44, 44); 
  border-bottom: 1px solid #d4d4d4; 
}

</style>
