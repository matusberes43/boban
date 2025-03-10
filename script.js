document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movieList');
    const addMovieForm = document.getElementById('addMovieForm');
    const applyFiltersButton = document.getElementById('applyFilters');

    let movies = [];

    // Pridanie filmu
    addMovieForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const year = parseInt(document.getElementById('year').value);
        const genre = document.getElementById('genre').value;
        const rating = parseFloat(document.getElementById('rating').value);

        const movie = { title, year, genre, rating };
        movies.push(movie);
        renderMovies(movies);

        addMovieForm.reset();
    });

    // Filtrovanie filmov
    applyFiltersButton.addEventListener('click', () => {
        const yearFrom = parseInt(document.getElementById('filterYearFrom').value) || 0;
        const yearTo = parseInt(document.getElementById('filterYearTo').value) || new Date().getFullYear();
        const genre = document.getElementById('filterGenre').value.toLowerCase();
        const rating = parseFloat(document.getElementById('filterRating').value) || 0;

        const filteredMovies = movies.filter(movie => {
            return (
                movie.year >= yearFrom &&
                movie.year <= yearTo &&
                movie.genre.toLowerCase().includes(genre) &&
                movie.rating >= rating
            );
        });

        renderMovies(filteredMovies);
    });

    // Zobrazenie filmov
    function renderMovies(movies) {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'bg-gray-50 p-4 rounded-lg shadow-sm';
            movieElement.innerHTML = `
                <h3 class="text-xl font-semibold">${movie.title}</h3>
                <p><strong>Rok:</strong> ${movie.year}</p>
                <p><strong>Žáner:</strong> ${movie.genre}</p>
                <p><strong>Hodnotenie:</strong> ${movie.rating}</p>
            `;
            movieList.appendChild(movieElement);
        });
    }
});