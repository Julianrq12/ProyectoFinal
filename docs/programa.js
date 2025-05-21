        var map = L.map('map').setView([4.693154616794554, -74.11102194695583], 16);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 25,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map); 

        L.marker([4.693154616794554, -74.11102194695583]).addTo(map).bindPopup("Barrio La Florida")

        map.on('click', onMapClick)
        function onMapClick(e){
            alert("Posición: "+e.latlng)
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const path = window.location.pathname;

if (path.includes("acerca.html")) {
    var polygon = L.polygon([
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
    // marcador para página del autor
    map.setView([4.603851294991477, -74.08654541312458], 16);
    L.marker([4.603851294991477, -74.08654541312458]).addTo(map)
        .bindPopup("Ubicación del autor");
} else {
    // marcador general por defecto
    L.marker([4.693154616794554, -74.11102194695583]).addTo(map)
        .bindPopup("Barrio La Florida");
}
