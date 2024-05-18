// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// GeoJSON data
var geojsonData = {
  "type": "FeatureCollection",
  "metadata": {
    "generated": 1716063266000,
    "url": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson",
    "title": "USGS Magnitude 4.5+ Earthquakes, Past Day",
    "status": 200,
    "api": "1.10.3",
    "count": 11
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "mag": 4.7,
        "place": "54 km ESE of Tomioka, Japan",
        "time": 1716047154878,
        "updated": 1716055466771,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzgl",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzgl.geojson",
        "felt": 2,
        "cdi": 4.5,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 341,
        "net": "us",
        "code": "6000mzgl",
        "ids": ",us6000mzgl,",
        "sources": ",us,",
        "types": ",dyfi,origin,phase-data,",
        "nst": 111,
        "dmin": 2.795,
        "rms": 0.66,
        "gap": 96,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 4.7 - 54 km ESE of Tomioka, Japan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [141.6007, 37.185, 35.39]
      },
      "id": "us6000mzgl"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.7,
        "place": "39 km N of Rabaul, Papua New Guinea",
        "time": 1716041084481,
        "updated": 1716060691929,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzgb",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzgb.geojson",
        "felt": 2,
        "cdi": 4.8,
        "mmi": 5.063,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 501,
        "net": "us",
        "code": "6000mzgb",
        "ids": ",us6000mzgb,",
        "sources": ",us,",
        "types": ",dyfi,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 75,
        "dmin": 5.082,
        "rms": 0.85,
        "gap": 56,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 5.7 - 39 km N of Rabaul, Papua New Guinea"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [152.1281, -3.8483, 10]
      },
      "id": "us6000mzgb"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 4.5,
        "place": "south of the Fiji Islands",
        "time": 1716025312602,
        "updated": 1716026800040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzf0",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzf0.geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 312,
        "net": "us",
        "code": "6000mzf0",
        "ids": ",us6000mzf0,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 44,
        "dmin": 4.828,
        "rms": 0.84,
        "gap": 102,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 4.5 - south of the Fiji Islands"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-179.7763, -23.5038, 547.309]
      },
      "id": "us6000mzf0"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.5,
        "place": "266 km SSE of Tabiauan, Philippines",
        "time": 1716013569946,
        "updated": 1716020950507,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mze2",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mze2.geojson",
        "felt": null,
        "cdi": null,
        "mmi": 0,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 465,
        "net": "us",
        "code": "6000mze2",
        "ids": ",us6000mze2,",
        "sources": ",us,",
        "types": ",losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 95,
        "dmin": 3.495,
        "rms": 0.93,
        "gap": 44,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 5.5 - 266 km SSE of Tabiauan, Philippines"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [122.9581, 3.8663, 527.672]
      },
      "id": "us6000mze2"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 4.5,
        "place": "96 km WNW of Porgera, Papua New Guinea",
        "time": 1716011675979,
        "updated": 1716012587040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzdw",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzdw.geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 312,
        "net": "us",
        "code": "6000mzdw",
        "ids": ",us6000mzdw,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 28,
        "dmin": 3.138,
        "rms": 0.52,
        "gap": 102,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 4.5 - 96 km WNW of Porgera, Papua New Guinea"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [142.3105, -5.2304, 126.158]
      },
      "id": "us6000mzdw"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 4.8,
        "place": "Tristan da Cunha region",
        "time": 1716005911058,
        "updated": 1716007916040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzdk",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzdk.geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 354,
        "net": "us",
        "code": "6000mzdk",
        "ids": ",us6000mzdk,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 21,
        "dmin": 3.342,
        "rms": 1.18,
        "gap": 73,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 4.8 - Tristan da Cunha region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-15.6494, -35.0942, 10]
      },
      "id": "us6000mzdk"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.1,
        "place": "South Indian Ocean",
        "time": 1716001615538,
        "updated": 1716003184040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzcu",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzcu.geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 400,
        "net": "us",
        "code": "6000mzcu",
        "ids": ",us6000mzcu,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 49,
        "dmin": 2.968,
        "rms": 1.03,
        "gap": 59,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.1 - South Indian Ocean"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [94.8977, -14.4963, 10]
      },
      "id": "us6000mzcu"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5,
        "place": "South Sandwich Islands region",
        "time": 1715996508761,
        "updated": 1715997660040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzcb",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzcb.geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 385,
        "net": "us",
        "code": "6000mzcb",
        "ids": ",us6000mzcb,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 29,
        "dmin": 15.06,
        "rms": 0.56,
        "gap": 95,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.0 - South Sandwich Islands region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-26.064, -59.8473, 35]
      },
      "id": "us6000mzcb"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 4.5,
        "place": "9 km NNW of Hasaki, Japan",
        "time": 1715993748787,
        "updated": 1716010519917,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzc0",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzc0.geojson",
        "felt": 3,
        "cdi": 3.1,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 312,
        "net": "us",
        "code": "6000mzc0",
        "ids": ",us6000mzc0,",
        "sources": ",us,",
        "types": ",dyfi,origin,phase-data,",
        "nst": 37,
        "dmin": 2.207,
        "rms": 0.39,
        "gap": 131,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 4.5 - 9 km NNW of Hasaki, Japan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [140.7822, 35.8064, 42.606]
      },
      "id": "us6000mzc0"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 4.7,
        "place": "67 km SE of Kirakira, Solomon Islands",
        "time": 1715982408796,
        "updated": 1715985454040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzb4",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzb4.geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 340,
        "net": "us",
        "code": "6000mzb4",
        "ids": ",us6000mzb4,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 30,
        "dmin": 2.741,
        "rms": 0.51,
        "gap": 58,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 4.7 - 67 km SE of Kirakira, Solomon Islands"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [162.2724, -10.9575, 10]
      },
      "id": "us6000mzb4"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.8,
        "place": "Kermadec Islands, New Zealand",
        "time": 1715979507321,
        "updated": 1716042621789,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000mzau",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000mzau.geojson",
        "felt": null,
        "cdi": null,
        "mmi": 3.661,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 518,
        "net": "us",
        "code": "6000mzau",
        "ids": ",us6000mzau,",
        "sources": ",us,",
        "types": ",losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 217,
        "dmin": 0.532,
        "rms": 0.65,
        "gap": 28,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 5.8 - Kermadec Islands, New Zealand"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-178.5275, -29.1475, 196.193]
      },
      "id": "us6000mzau"
    }
  ],
  "bbox": [-179.7763, -59.8473, 10, 162.2724, 37.185, 547.309]
};

// Function to style each earthquake marker
function styleInfo(feature) {
    return {
        radius: getRadius(feature.properties.mag),
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
}

// Function to determine the color of each marker based on depth
function getColor(depth) {
    return depth > 90 ? '#800026' :
           depth > 70 ? '#BD0026' :
           depth > 50 ? '#E31A1C' :
           depth > 30 ? '#FC4E2A' :
           depth > 10 ? '#FD8D3C' :
                        '#FEB24C';
}

// Function to determine the radius of each marker based on magnitude
function getRadius(magnitude) {
    return magnitude ? magnitude * 4 : 1;
}

// Create a GeoJSON layer for the provided GeoJSON data
L.geoJSON(geojsonData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.title}</h3><hr><p>${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }
}).addTo(map);

// Create a legend for depth
var depthLegend = L.control({position: 'bottomright'});

depthLegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'legend');
    var grades = [0, 10, 30, 50, 70, 90];
    var labels = [];
    var from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = '<strong>Depth</strong><br>' + labels.join('<br>');
    return div;
};

depthLegend.addTo(map);

// Create a legend for magnitude
var magnitudeLegend = L.control({position: 'bottomleft'});

magnitudeLegend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'legend');
    var grades = [0, 1, 2, 3, 4, 5];
    var labels = [];
    var from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(10) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = '<strong>Magnitude</strong><br>' + labels.join('<br>');
    return div;
};

magnitudeLegend.addTo(map);
