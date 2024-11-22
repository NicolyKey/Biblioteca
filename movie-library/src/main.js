import { searchMovies } from './services/api.js';
import { renderMovies } from './components/movieCard.js';

document.getElementById('searchButton').addEventListener('click', () => {
    let debounceTimeout;
    const searchInput = document.getElementById('searchInput');
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(async () => {
        const query = searchInput.value.trim();
        if (query) {
            const movies = await searchMovies(query);
            renderMovies(movies);
        } else {
            renderMovies([]);
        }
    }, 300);
});


