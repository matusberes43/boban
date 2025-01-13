let map;
let geocoder;
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    });
    geocoder = new google.maps.Geocoder();
}

function calculateDistance() {
    const city1 = document.getElementById('city1').value;
    const city2 = document.getElementById('city2').value;

    if (!city1 || !city2) {
        alert('Please enter both capital cities.');
        return;
    }

    Promise.all([geocodeCity(city1), geocodeCity(city2)])
        .then(results => {
            const [location1, location2] = results;
            addMarker(location1);
            addMarker(location2);

            const distance = haversineDistance(location1, location2);
            document.getElementById('distance').innerText = `Distance: ${distance.toFixed(2)} km`;

            map.setCenter(location1);
            map.setZoom(4);
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
}

function geocodeCity(city) {
    return new Promise((resolve, reject) => {
        geocoder.geocode({ address: city }, (results, status) => {
            if (status === "OK" && results[0]) {
                resolve(results[0].geometry.location);
            } else {
                reject(new Error("City not found."));
            }
        });
    });
}

function addMarker(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
    markers.push(marker);
}

function haversineDistance(location1, location2) {
    const R = 6371; // Earth's radius in km
    const lat1 = location1.lat();
    const lon1 = location1.lng();
    const lat2 = location2.lat();
    const lon2 = location2.lng();

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