import csv
import json

csv_file = 'data.csv'
json_file = 'data.json'

data = []

with open(csv_file, newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        lat_str, lon_str = row['經緯度'].split(',')

        # 將每筆資料格式化為 JSON 字典
        item = {
            'name': row['名子'],
            'lat': float(lat_str.strip()),
            'lng': float(lon_str.strip()),
            'platform': row['平台'],
            'link': row['連結'],
            'type': row['種類'],
            'city': row['縣市'],
            'District': row['鄉鎮區'],
            'google_map': row['Google Map']
        }
        data.append(item)

# 輸出為標準 JSON 格式
with open(json_file, 'w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, ensure_ascii=False, indent=2)

print("✅ 已產出標準 JSON 檔案：data.json")
