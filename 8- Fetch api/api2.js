document.addEventListener('DOMContentLoaded', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/magikarp')
        .then(response => response.json())
        .then(data => {
            const pokemonInfo = document.getElementById('pokemon-info');

            const nameElement = document.createElement('div');
            nameElement.classList.add('pokemon-data');
            nameElement.textContent = `Nombre: ${data.name}`;
            pokemonInfo.appendChild(nameElement);

            const gifElement = document.createElement('div');
            gifElement.classList.add('pokemon-data');
            const gifImage = document.createElement('img');
            gifImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
            gifElement.appendChild(gifImage);
            pokemonInfo.appendChild(gifElement);

            const heightElement = document.createElement('div');
            heightElement.classList.add('pokemon-data');
            heightElement.textContent = `Altura: ${data.height}`;
            pokemonInfo.appendChild(heightElement);

            const weightElement = document.createElement('div');
            weightElement.classList.add('pokemon-data');
            weightElement.textContent = `Peso: ${data.weight}`;
            pokemonInfo.appendChild(weightElement);

            const abilitiesElement = document.createElement('div');
            abilitiesElement.classList.add('pokemon-data');
            const abilitiesList = data.abilities.map(ability => ability.ability.name).join(', ');
            abilitiesElement.textContent = `Habilidades: ${abilitiesList}`;
            pokemonInfo.appendChild(abilitiesElement);
        })
        .catch(error => {
            console.error('Error al obtener los datos del Pokémon:', error);
        });
});
