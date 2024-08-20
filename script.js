document.getElementById('articleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Získať hodnoty z formulára
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Vytvoriť nový div pre článok
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    // Pridať nadpis článku
    const articleTitle = document.createElement('h3');
    articleTitle.textContent = title;
    articleDiv.appendChild(articleTitle);

    // Pridať obsah článku
    const articleContent = document.createElement('p');
    articleContent.textContent = content;
    articleDiv.appendChild(articleContent);

    // Pridať článok do zoznamu článkov
    document.getElementById('articleList').appendChild(articleDiv);

    // Vyčistiť formulár
    document.getElementById('articleForm').reset();
});
