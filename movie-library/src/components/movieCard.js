export function renderMovies(movies) {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = '';

    console.log("teste");


    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesList.innerHTML += movieCard
    });
}


export function createMovieCard(movie) {
    return `
       <div class="col-md-4">
          <div class="card movie-card h-100 p-3">
             <img src="${movie.poster}" class="card-img-top flag-img" alt="Capa filme">
             <div class="movie-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">
                    <strong>Year:</strong>${movie.year}<br>
                    <strong>Year:</strong>${movie.type}<br>
                </p>
             </div>
          </div>
       </div>
    `
}