import axios from 'axios';
const API_KEY = 'trilogy'; // Você pode usar: 'trilogy'
const BASE_URL = 'https://www.omdbapi.com';


export async function searchMovies(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                s: query,
                type: 'movie'
            }
        });

        if (response.data.Response === 'False') {
            throw new Error(response.data.Error || 'Nenhum filme encontrado');
        }

        return response.data.Search.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Sem+Poster',
            type: movie.Type
        }));
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        throw error;
    }
}


