document.addEventListener("DOMContentLoaded", function() {
    const articles = [
        { title: "Article 1", content: "This is the content of article 1." },
        { title: "Article 2", content: "This is the content of article 2." },
        { title: "Article 3", content: "This is the content of article 3." },
        // Přidejte více článků podle potřeby
    ];

    const articleList = document.querySelector('.article-list');
    const articleTitle = document.getElementById('article-title');
    const articleText = document.getElementById('article-text');

    // Vytvoření seznamu článků
    articles.forEach((article, index) => {
        const li = document.createElement('li');
        li.textContent = article.title;
        li.addEventListener('click', () => {
            articleTitle.textContent = article.title;
            articleText.textContent = article.content;
        });
        articleList.appendChild(li);
    });
});
