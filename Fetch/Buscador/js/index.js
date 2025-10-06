function mostrarPokemon(){
    const input = document.querySelector("#buscadorPokemon").value.toLowerCase().trim();
    
    
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const imagen = document.querySelector("#imagenPokemon");
        imagen.src = data.sprites.front_default;
        imagen.style.display = "block";
    })      
}
const boton = document.querySelector("#mostrarPokemon");   
    
    boton.addEventListener("click", () => {
        mostrarPokemon();
    })