<script>
export default {
  data(){
    return{ 
      name: "nomeDoPokemon",
     }
     
  } 
}


</script>




<template>

    <section class="container">

    <form class="form" id="form" autocomplete="off" action="/action_page.php">

      <section class="autocomplete" style="width:300px;">

        <input id="myInput" class="input" type="text" name="Pokemon" placeholder="Pokemon name">
      
      </section>

      <input type="button" class="searchButton" id="button" value="🔎">
    
    </form>
      <input type="button" class="absoluteButton hidden" id="refresh" value="New Search">

  </section>
</template>

<style>
.hidden{
  display: none;
}

*{
  color: white;
  font-family: 'Press Start 2P', cursive;
}

form {display: flex;}
.autocomplete {
  position: relative;
  display: inline-block;
}
.searchButton {
  margin: 0 auto;
  height: 52px;
  width: 60px;
  background: rgb(29, 29, 29);
  border: 1px solid #d4d4d4;
  color:#d4d4d4;
  cursor: pointer;
}
input {
  border: 1px solid transparent;
  background-color: rgb(29, 29, 29);
  padding: 15px;
  font-size: 20px;
  border: 1px solid #d4d4d4;

}

input[type=text] {
  background-color:rgb(29, 29, 29);
  width: 90%;
}

.absoluteButton {
  position: absolute;
  width: 300px;
  height: 100px;
  cursor: pointer;
  border-radius: 80px;
  box-shadow: 1px 1px 5px white;
}

.autocomplete.div {
  padding: 10px;
  cursor: pointer;
  background-color: rgb(97, 44, 44); 
  border-bottom: 1px solid #d4d4d4; 
}

</style>
