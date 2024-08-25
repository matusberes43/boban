document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Získání hodnot z formuláře
    const category = document.getElementById('category').value;
    const title = document.getElementById('title').value;
    const reviewText = document.getElementById('review').value;
    const author = document.getElementById('author').value;

    // Vytvoření nového prvku recenze
    const reviewContainer = document.getElementById('reviews-container');
    const newReview = document.createElement('article');

    newReview.innerHTML = `
        <h3>${title}</h3>
        <p>${reviewText}</p>
        <small>Kategorie: ${category} | Autor: ${author} | Datum: ${new Date().toLocaleDateString()}</small>
    `;

    // Přidání nové recenze do DOM
    reviewContainer.appendChild(newReview);

    // Vyčištění formuláře
    document.getElementById('review-form').reset();
});