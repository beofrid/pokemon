const pokemonName = document.getElementById("name")
const pokemonType = document.getElementById("pokemonType")
const pokemonImg = document.getElementById("img")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("sepcialAttack")
const specialDefense = document.getElementById("specialDefense")
const speed = document.getElementById("speed")


function getData() {
    const url = `https://pokeapi.co/api/v2/pokemon/25`
        fetch (url)
            .then(response => response.json())    
            .then(pokemon => {
                pokemonName.innerHTML = pokemon.name
                pokemonType.innerHTML += pokemon.types[0].type.name
                pokemonImg.src = pokemon.sprites.front_default
                hp.innerHTML += pokemon.stats[0].base_stat
                attack.innerHTML += pokemon.stats[1].base_stat
                defense.innerHTML += pokemon.stats[2].base_stat
                specialAttack.innerHTML += pokemon.stats[3].base_stat
                specialDefense.innerHTML += pokemon.stats[4].base_stat
                speed.innerHTML += pokemon.stats[5].base_stat
                console.log(pokemon)
                
                
                
                
                
                
            })
            
} getData()