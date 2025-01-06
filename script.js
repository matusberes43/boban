document.addEventListener('DOMContentLoaded', () => {
    const vodkaLevel = document.getElementById('vodka-level');
    
    // Animačná funkcia na zmenu výšky "vodky"
    function drinkVodka() {
        vodkaLevel.style.height = '100%';
        setTimeout(() => {
            vodkaLevel.style.height = '0%';
        }, 2000); // 2 sekundy na "vypitie"
    }

    // Spustenie animácie po načítaní stránky
    drinkVodka();

    // Prípadne pridajte interaktivitu, napr. kliknutie pre opätovné spustenie animácie
    document.body.addEventListener('click', drinkVodka);
});