document.addEventListener('DOMContentLoaded', () => {
    // Dummy data for theories
    const theories = [
        { title: "Moon Landing", content: "Was it real or staged?" },
        { title: "Flat Earth", content: "Is the Earth really flat?" }
    ];

    const theoryList = document.getElementById('theoryList');
    theories.forEach(theory => {
        const theoryElement = document.createElement('div');
        theoryElement.innerHTML = `<h3>${theory.title}</h3><p>${theory.content}</p>`;
        theoryList.appendChild(theoryElement);
    });

    // Form submission
    const addTheoryForm = document.getElementById('addTheoryForm');
    addTheoryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('theoryTitle').value;
        const content = document.getElementById('theoryContent').value;
        
        // Here you would typically send this data to a server
        console.log(`New Theory Added: ${title} - ${content}`);
        this.reset();
    });

    // Login and Register buttons - functionality not implemented here
    document.getElementById('loginBtn').addEventListener('click', () => alert('Login functionality not implemented'));
    document.getElementById('registerBtn').addEventListener('click', () => alert('Register functionality not implemented'));
});