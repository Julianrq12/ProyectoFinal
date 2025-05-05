var map = L.map('map').setView([4.693154616794554, -74.11102194695583], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let MiObjeto= document.getElementById("MiEtiqueta")
for(let y=0; y=1e6; y++){
    MiObjeto.innerHTML=MiObjeto.innerHTML+y
}