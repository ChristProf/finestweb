document.addEventListener('DOMContentLoaded', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(response => response.json())
        .then(data => {
            const pokemonTable = document.getElementById('pokemon-table').querySelector('tbody');
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = data.name;
            row.appendChild(nameCell);

            const gifCell = document.createElement('td');
            const gifImage = document.createElement('img');
            gifImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
            gifCell.appendChild(gifImage);
            row.appendChild(gifCell);

            const jpgCell = document.createElement('td');
            const jpgImage = document.createElement('img');
            jpgImage.src = data.sprites.front_default;
            jpgCell.appendChild(jpgImage);
            row.appendChild(jpgCell);

            const heightCell = document.createElement('td');
            heightCell.textContent = data.height;
            row.appendChild(heightCell);

            const weightCell = document.createElement('td');
            weightCell.textContent = data.weight;
            row.appendChild(weightCell);

            pokemonTable.appendChild(row);
        })
        .catch(error => {
            console.error('Error al obtener los datos del Pokémon:', error);
        });
});
