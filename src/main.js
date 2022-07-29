import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

const pokemonName = document.getElementById("name") 
const pokemonType = document.getElementById("pokemonType") 
const pokemonImg = document.getElementById("img") 

const hp = document.getElementById("hp") 
const attack = document.getElementById("attack") 
const defense = document.getElementById("defense") 
const specialAttack = document.getElementById("sepcialAttack") 
const specialDefense = document.getElementById("specialDefense") 
const speed = document.getElementById("speed") 

const input = document.getElementById("myInput")
const button = document.getElementById("button")
var indexName = "polteageist"
// console.log(indexName)


const pokedexTop = document.getElementById("pokedexTop")
const pokedexMiddle = document.getElementById("pokedexMiddle")
const pokedexBottom = document.getElementById("pokedexBottom")
const pokedexContent = document.getElementById("pokedexContent")



button.addEventListener('click', indexPokemonName)
function indexPokemonName() {
    // console.log("HI", input.value)
    indexName = input.value
    getData()
    // pokedexContent.classList.add("pokedexLaunch")
    // pokedexTop.style.transform = "translateY(0px)"
    // pokedexBottom.style.transform = "translateY(0px)"
    // pokedexMiddle.classList.remove("opacity")
    pokedexContent.classList.remove("pokedexLaunch")
    pokedexTop.style.transform = "translateY(-80px)"
    pokedexBottom.style.transform = "translateY(235px)"
    pokedexMiddle.classList.add("opacity")


    return indexName
  }


function getData() {
console.log("data", indexName)
    
    const url = `https://pokeapi.co/api/v2/pokemon/${indexName}`
        fetch (url)
            .then(response => response.json())    
            .then(pokemon => {
                nameArray.push(pokemon.name)
                pokemonName.innerHTML = pokemon.name
                pokemonType.innerHTML = `Type: ${pokemon.types[0].type.name}`
                pokemonImg.src = pokemon.sprites.front_default

                hp.innerHTML = pokemon.stats[0].base_stat
                  hp.style.width = `${pokemon.stats[0].base_stat-12}px`

                attack.innerHTML = pokemon.stats[1].base_stat
                  attack.style.width = `${pokemon.stats[1].base_stat-12}px`

                defense.innerHTML = pokemon.stats[2].base_stat
                  defense.style.width = `${pokemon.stats[2].base_stat-12}px`

                specialAttack.innerHTML = pokemon.stats[3].base_stat
                  specialAttack.style.width = `${pokemon.stats[3].base_stat-12}px`

                specialDefense.innerHTML = pokemon.stats[4].base_stat
                  specialDefense.style.width = `${pokemon.stats[4].base_stat-12}px`

                speed.innerHTML = pokemon.stats[5].base_stat
                  speed.style.width = `${pokemon.stats[5].base_stat-12}px`
                  // console.log("hp",pokemon.stats[0].base_stat)
                  // console.log("attack",pokemon.stats[1].base_stat)
                  // console.log("defence",pokemon.stats[2].base_stat)
                  // console.log("sa",pokemon.stats[3].base_stat)
                  // console.log("sd",pokemon.stats[4].base_stat)
                  // console.log("speed",pokemon.stats[5].base_stat)

                // console.log(pokemon)
                   
           
            }) 

        

    let nameArray= []
    for(let i = 1; i <= 150; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        fetch (url)
            .then(response => response.json())    
            .then(pokemon => {
                nameArray.push(pokemon.name)
                
                // console.log(pokemon)
           
            })} 
            // console.log (nameArray)
    
            
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  
  autocomplete(document.getElementById("myInput"), nameArray);
} getData()

