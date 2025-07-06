// const map = L.map('map').setView([25.0457936, 121.6168995], 16);
const map = L.map('map').setView([23.7, 121], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
}).addTo(map);

let locations_viewpoint = [];

fetch('data.json')
.then(response => response.json())
.then(data => {
    locations_viewpoint = data;

    const attractionIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    });

    locations_viewpoint.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: attractionIcon }).addTo(map);
        marker.bindPopup(`
        <strong>${loc.name}</strong><br>
        座標：${loc.lat}, ${loc.lng}<br>
        來源：<a href="${loc.link}" target="_blank">${loc.platform}</a><br>
        Google Map：<a href="${loc.google_map}" target="_blank">地圖</a>
        `);
    });
})
.catch(error => {
    console.error('❌ 無法載入 JSON 檔案:', error);
});