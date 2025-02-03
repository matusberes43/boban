function navigate(page) {
    switch(page) {
        case 'usa':
            window.location.href = "usa.html";
            break;
        case 'world':
            window.location.href = "world.html";
            break;
        case 'news':
            window.location.href = "news.html";
            break;
        case 'videos':
            window.location.href = "videos.html";
            break;
        default:
            alert("Neznáma stránka!");
    }
}