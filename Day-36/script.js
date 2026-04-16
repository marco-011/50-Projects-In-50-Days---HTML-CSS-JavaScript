// Get main container where all Pokémon cards will be added
const poke_container = document.getElementById("poke-container");

// Total number of Pokémon to fetch
const pokemon_count = 5000;

// Color mapping based on Pokémon type
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// Get all available types from colors object
const main_types = Object.keys(colors);

// 🔄 Fetch all Pokémon one by one
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i); // Call function for each Pokémon
  }
};

// 🌐 Fetch a single Pokémon using API
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`; // API endpoint
  const res = await fetch(url); // Fetch data
  const pokemon = await res.json(); // Convert to JSON
  createPokemonCard(pokemon); // Create UI card
};

// 🎨 Create Pokémon card UI
const createPokemonCard = (pokemon) => {

  // Create a div for each Pokémon
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  // 📝 Format Pokémon name (First letter capital)
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  // 🧬 Extract Pokémon types (can have multiple)
  const poke_types = pokemon.types.map((t) => t.type.name);

  // 🎯 Find first matching type from our color list
  const type = main_types.find((t) => poke_types.includes(t));

  // 🎨 Get color based on type
  const color = colors[type];

  // Apply background color to card
  pokemonEl.style.backgroundColor = color;

  // 🧱 HTML structure for each Pokémon card
  const pokemonInnerHTML = `
    <div class="img-container">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
        alt="${name}"
      />
    </div>
    <div class="info">
      <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;

  // Insert HTML into the card
  pokemonEl.innerHTML = pokemonInnerHTML;

  // Add card to main container
  poke_container.appendChild(pokemonEl);
};

// 🚀 Start fetching all Pokémon
fetchPokemons();