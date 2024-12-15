body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

.header {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1rem;
}

.title {
    margin: 0;
    font-size: 2rem;
}

.main-content {
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
}

.section-title {
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}

.movie-item {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.movie-item:hover {
    transform: translateY(-5px);
}

.movie-poster {
    width: 100%;
    height: auto;
    display: block;
}

.movie-title {
    font-size: 1.1rem;
    margin: 0.5rem 0 0.2rem;
    padding: 0 0.5rem;
}

.movie-rating {
    margin: 0;
    padding: 0 0.5rem 0.5rem;
    color: #e74c3c;
}

.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}

@media (max-width: 768px) {
    .main-content {
        padding: 1rem;
    }
    .movie-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
}