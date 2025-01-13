async function searchMovie() {
    const query = document.getElementById('movie-search').value;
    if (query.length < 3) return;

    const apiKey = '79adf4be';
    const response = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === "True") {
        document.getElementById('movie-result').innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>Country:</strong> ${data.Country}</p>
            <p><strong>Box Office:</strong> ${data.BoxOffice || 'N/A'}</p>
        `;
    } else {
        document.getElementById('movie-result').innerHTML = `<p>Movie not found!</p>`;
    }
}