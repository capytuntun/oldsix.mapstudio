const map = L.map('map').setView([23.7, 121], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
}).addTo(map);

// 建立類別對應 LayerGroup
const layerGroups = {
    drink: L.layerGroup().addTo(map),
    dessert: L.layerGroup().addTo(map),
    hotpot: L.layerGroup().addTo(map)
};

// icon 設定
const attractionIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

// 建立控制面板（不會擋到 zoom）
const layerControl = L.control({ position: 'topleft' });

layerControl.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    div.innerHTML = `
        <div style="padding:6px 8px; font-size:13px;">
            <div>
                <button type="button" id="checkAll">全部勾選</button>
                <button type="button" id="uncheckAll">全部取消</button>
            </div>
            <br>
            <input type="checkbox" class="layer-toggle" value="健行" checked>健行</label><br>
            <input type="checkbox" class="layer-toggle" value="小吃" checked>小吃</label><br>
            <input type="checkbox" class="layer-toggle" value="甜點/冰品" checked>甜點/冰品</label><br>
            <input type="checkbox" class="layer-toggle" value="生魚片/海鮮" checked>生魚片/海鮮</label><br>
            <input type="checkbox" class="layer-toggle" value="港式" checked>港式</label><br>
            <input type="checkbox" class="layer-toggle" value="室外景點" checked>室外景點</label><br>
            <input type="checkbox" class="layer-toggle" value="牛肉麵" checked>牛肉麵</label><br>
            <input type="checkbox" class="layer-toggle" value="旅館" checked>旅館</label><br>
            <input type="checkbox" class="layer-toggle" value="咖啡廳" checked>咖啡廳</label><br>
            <input type="checkbox" class="layer-toggle" value="咖哩" checked>咖哩</label><br>
            <input type="checkbox" class="layer-toggle" value="牧場" checked>牧場</label><br>
            <input type="checkbox" class="layer-toggle" value="居酒/燒烤" checked>居酒/燒烤</label><br>
            <input type="checkbox" class="layer-toggle" value="火鍋" checked>火鍋</label><br>
            <input type="checkbox" class="layer-toggle" value="海鮮/活魚" checked>海鮮/活魚</label><br>
            <input type="checkbox" class="layer-toggle" value="動物餐廳" checked>動物餐廳</label><br>
            <input type="checkbox" class="layer-toggle" value="農場(牧場)" checked>農場(牧場)</label><br>
            <input type="checkbox" class="layer-toggle" value="羊肉" checked>羊肉</label><br>
            <input type="checkbox" class="layer-toggle" value="牛肉" checked>牛肉</label><br>
            <input type="checkbox" class="layer-toggle" value="冰品/甜點" checked>冰品/甜點</label><br>
            <input type="checkbox" class="layer-toggle" value="合菜" checked>合菜</label><br>
            <input type="checkbox" class="layer-toggle" value="戶外景點" checked>戶外景點</label><br>
            <input type="checkbox" class="layer-toggle" value="海鮮" checked>海鮮</label><br>
            <input type="checkbox" class="layer-toggle" value="飲料"checked>飲料</label><br>
            <input type="checkbox" class="layer-toggle" value="熱炒類" checked>熱炒類</label><br>
            <input type="checkbox" class="layer-toggle" value="鐵板燒" checked>鐵板燒</label><br>
            <input type="checkbox" class="layer-toggle" value="熱炒/燒烤" checked>熱炒/燒烤</label><br>
            <input type="checkbox" class="layer-toggle" value="buffet" checked>buffet</label><br>
            <input type="checkbox" class="layer-toggle" value="牛排" checked>牛排</label><br>
            <input type="checkbox" class="layer-toggle" value="宮廟" checked>宮廟</label><br>
            <input type="checkbox" class="layer-toggle" value="早午餐" checked>早午餐</label><br>
            <input type="checkbox" class="layer-toggle" value="海鮮/甜點" checked>海鮮/甜點</label><br>
            <input type="checkbox" class="layer-toggle" value="牛肉麵/甜點" checked>牛肉麵/甜點</label><br>
            <input type="checkbox" class="layer-toggle" value="pizza" checked>pizza</label><br>
            <input type="checkbox" class="layer-toggle" value="豬腳" checked>豬腳</label><br>
            <input type="checkbox" class="layer-toggle" value="日料" checked>日料</label><br>
            <input type="checkbox" class="layer-toggle" value="住宿" checked>住宿</label><br>
            <input type="checkbox" class="layer-toggle" value="海鮮/生魚片" checked>海鮮/生魚片</label><br>
            <input type="checkbox" class="layer-toggle" value="速食" checked>速食</label><br>
            <input type="checkbox" class="layer-toggle" value="日式" checked>日式</label><br>
            <input type="checkbox" class="layer-toggle" value="火鍋/燒烤" checked>火鍋/燒烤</label><br>
            <input type="checkbox" class="layer-toggle" value="室內景點" checked>室內景點</label><br>
            <input type="checkbox" class="layer-toggle" value="宵夜" checked>宵夜</label><br>
            <input type="checkbox" class="layer-toggle" value="法式" checked>法式</label><br>
            <input type="checkbox" class="layer-toggle" value="燒烤" checked>燒烤</label><br>
            <input type="checkbox" class="layer-toggle" value="泰式" checked>泰式</label><br>
            <input type="checkbox" class="layer-toggle" value="熱炒" checked>熱炒</label><br>
            <input type="checkbox" class="layer-toggle" value="冰品/甜點" checked>冰品/甜點</label><br>
            <input type="checkbox" class="layer-toggle" value="麵店" checked>麵店</label><br>
            <input type="checkbox" class="layer-toggle" value="義式" checked>義式</label><br>
            <input type="checkbox" class="layer-toggle" value="酒/海鮮" checked>酒/海鮮</label><br>
            <input type="checkbox" class="layer-toggle" value="農場/牧場" checked>農場/牧場</label><br>
            <input type="checkbox" class="layer-toggle" value="港式" checked>港式</label><br>
            <input type="checkbox" class="layer-toggle" value="牛肉/牛排" checked>牛肉/牛排</label><br>
            <input type="checkbox" class="layer-toggle" value="台菜" checked>台菜</label><br>
            <input type="checkbox" class="layer-toggle" value="韓式" checked>韓式</label><br>
            <input type="checkbox" class="layer-toggle" value="拉麵" checked>拉麵</label><br>
            <input type="checkbox" class="layer-toggle" value="咖啡廳/簡餐" checked>咖啡廳/簡餐</label><br>
            <input type="checkbox" class="layer-toggle" value="台式" checked>台式</label><br>
            <input type="checkbox" class="layer-toggle" value="大學店" checked>大學店</label><br>
        </div>
    `;
    L.DomEvent.disableClickPropagation(div); // 防止干擾地圖拖動
    return div;
};
layerControl.addTo(map);

// 綁定 checkbox 事件（一次寫好）
function setupCheckboxEvents() {
    document.querySelectorAll('.layer-toggle').forEach(cb => {
        cb.addEventListener('change', function () {
            const type = this.value;
            const checked = this.checked;

            if (checked) {
                layerGroups[type]?.addTo(map);
            } else {
                map.removeLayer(layerGroups[type]);
            }
        });
    });
}

document.getElementById('checkAll').addEventListener('click', () => {
    document.querySelectorAll('.layer-toggle').forEach(cb => {
        cb.checked = true;
        const type = cb.value;
        if (layerGroups[type]) {
            layerGroups[type].addTo(map);
        }
    });
});

document.getElementById('uncheckAll').addEventListener('click', () => {
    document.querySelectorAll('.layer-toggle').forEach(cb => {
        cb.checked = false;
        const type = cb.value;
        if (layerGroups[type]) {
            map.removeLayer(layerGroups[type]);
        }
    });
});


fetch('data.json')
.then(response => response.json())
.then(data => {
    data.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: attractionIcon }).bindPopup(`
            <strong>${loc.name}</strong><br>
            座標：${loc.lat}, ${loc.lng}<br>
            來源：<a href="${loc.link}" target="_blank">${loc.platform}</a><br>
            Google Map：<a href="${loc.google_map}" target="_blank">地圖</a>
        `);

        const type = loc.type;

        // 如果這個類別還沒建立對應 LayerGroup，就新增
        if (!layerGroups[type]) {
            layerGroups[type] = L.layerGroup();
        }

        // 將 marker 加入該類別 LayerGroup
        marker.addTo(layerGroups[type]);
    });

    // 初始顯示所有圖層
    Object.values(layerGroups).forEach(layer => layer.addTo(map));

    // 綁定 checkbox 事件
    setupCheckboxEvents();
});
function setupCheckboxEvents() {
    document.querySelectorAll('.layer-toggle').forEach(cb => {
        cb.addEventListener('change', function () {
            const type = this.value;
            const checked = this.checked;

            if (!layerGroups[type]) return;

            if (checked) {
                layerGroups[type].addTo(map);
            } else {
                map.removeLayer(layerGroups[type]);
            }
        });
    });
}
