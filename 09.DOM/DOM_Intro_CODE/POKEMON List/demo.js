const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');
for (let i = 1; i < 151; i++) {
    const pokemon = document.createElement("div");
    const label=document.createElement("span");
        newImg = document.createElement("img");

        label.innerText="#"+i;
    newImg.src=baseURL+i+".png";
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
   
    container.appendChild(pokemon);
    
}