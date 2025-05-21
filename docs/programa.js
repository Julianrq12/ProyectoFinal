        var map = L.map('map').setView([4.693154616794554, -74.11102194695583], 16);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 25,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map); 

        L.marker([4.693154616794554, -74.11102194695583]).addTo(map).bindPopup("Barrio La Florida")

        map.on('click', onMapClick)
        function onMapClick(e){
            alert("Posición: "+e.latlng)
        }