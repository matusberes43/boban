// Zoznam hlavných miest a ich súradníc
const capitals = {
    "Bratislava": { lat: 48.1486, lon: 17.1077 },
    "Paris": { lat: 48.8566, lon: 2.3522 },
    "London": { lat: 51.5074, lon: -0.1278 },
    "Berlin": { lat: 52.5200, lon: 13.4050 },
    "Tokyo": { lat: 35.6895, lon: 139.6917 },
    "Washington": { lat: 38.9072, lon: -77.0369 },
    "Canberra": { lat: -35.2809, lon: 149.1300 },
    // Pridaj viac hlavných miest podľa potreby
};

function calculateDistance() {
    const city1 = document.getElementById('city1').value;
    const city2 = document.getElementById('city2').value;

    if (!capitals[city1] || !capitals[city2]) {
        alert('One or both cities not found. Please enter valid capital cities.');
        return;
    }

    const location1 = capitals[city1];
    const location2 = capitals[city2];

    const distance = haversineDistance(location1.lat, location1.lon, location2.lat, location2.lon);
    document.getElementById('distance').innerText = `Distance: ${distance.toFixed(2)} km`;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Polomer Zeme v kilometroch
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}