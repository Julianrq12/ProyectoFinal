// Validar si la página tiene un contenedor #map y no es "anadir.html"
const mapContainer = document.getElementById('map');
const path = window.location.pathname;

if (mapContainer && !path.includes("anadir.html")) {
    var map = L.map('map').setView([4.693154616794554, -74.11102194695583], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 25,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    if (path.includes("acerca.html")) {
        const polygon = L.polygon([
            [4.698233311980569, -74.1148684543079],
            [4.693593669420297, -74.10734424011537],
            [4.690015009317711, -74.10909447698988],
            [4.694672658815977, -74.11712391419775]
        ], {
            color: 'green',
            fillColor: '#9fdfbf',
            fillOpacity: 0.4
        }).addTo(map).bindPopup("Zona de monitoreo");

        map.fitBounds(polygon.getBounds());

    } else if (path.includes("autor.html")) {
        map.setView([4.603851294991477, -74.08654541312458], 16);
        L.marker([4.603851294991477, -74.08654541312458])
            .addTo(map)
            .bindPopup("Ubicación del autor");

    } else {
        L.marker([4.693154616794554, -74.11102194695583])
            .addTo(map)
            .bindPopup("Barrio La Florida");
    }
}

// Buscar página
function buscarPagina() {
    const entrada = document.getElementById('searchInput').value.trim().toLowerCase();
    const rutas = {
        'inicio': 'index.html',
        'acerca': 'acerca.html',
        'autor': 'autor.html',
        'descripción': 'descripcion.html',
        'descripcion': 'descripcion.html',
        'añadir': 'anadir.html',
        'anadir': 'anadir.html'
    };

    if (rutas[entrada]) {
        window.location.href = rutas[entrada];
    } else {
        alert("Página no encontrada. Intenta con: inicio, acerca, descripción, autor o añadir.");
    }
}
