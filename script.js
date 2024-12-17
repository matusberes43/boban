const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselItems = document.querySelector('.carousel-items');

let index = 0;

next.addEventListener('click', () => {
    index = (index + 1) % 3;
    carouselItems.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
    index = (index - 1 + 3) % 3;
    carouselItems.style.transform = `translateX(-${index * 100}%)`;
});