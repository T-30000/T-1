document.getElementById('fetch-pokemon').addEventListener('click', function() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon');
            }
            return response.json();
        })
        .then(data => {
            // Construir la estructura de columnas para mostrar la información
            const pokemonInfoDiv = document.getElementById('pokemon-info');
            pokemonInfoDiv.innerHTML = `
                <div class="pokemones row">
                    <div class="col-md-4">
                        <h2>${data.name}</h2>
                        <img src="${data.sprites.front_default}" alt="${data.name}" class="p-img">
                    </div>
                    <div class="col-md-4">
                        <h3>Información</h3>
                        <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                        <p><strong>Tipos:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
                        <p><strong>Estadísticas:</strong></p>
                        <ul>
                            ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
                        </ul>
                        <p><strong>Movimientos:</strong></p>
                        <ul>
                            ${data.moves.slice(0, 5).map(move => `<li>${move.move.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h3>Sprites</h3>
                        <img src="${data.sprites.back_default}" alt="Back Sprite" class="p-img">
                        <img src="${data.sprites.front_shiny}" alt="Front Shiny Sprite" class="p-img">
                        <!-- Añadir más sprites si es necesario -->
                    </div>
                </div>
            `;
        })
        .catch(error => {
            const pokemonInfoDiv = document.getElementById('pokemon-info');
            pokemonInfoDiv.innerHTML = `<div class="error"><p style="color: red;">${error.message}</p></div>`;
        });
});