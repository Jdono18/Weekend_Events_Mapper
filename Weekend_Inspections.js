let EventMapCoordinates = [44.986656, -93.258133]
let zoomLevel = 13

let map = L.map('map').setView(EventMapCoordinates, zoomLevel)

// Base imagery layer
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, Maxar, Earthstar Geographics',
    maxZoom: 22
  }).addTo(map);

  // Create a pane for labels (on top, but non-interactive)
  map.createPane('labels');
  map.getPane('labels').style.zIndex = 650;
  map.getPane('labels').style.pointerEvents = 'none';

  // Add Transportation labels (roads, streets)
  L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri',
    pane: 'labels'
  }).addTo(map);

  // Add Boundaries and Places labels (city names, place names)
  L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri',
    pane: 'labels'
  }).addTo(map);



/*L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);*/

/*var haccpIcon = L.icon({
//    iconUrl: 'haccpIcon.png',
//
//    iconSize: [30, 30],
    //iconAnchor: [22, 94],
//    popupAnchor: [-3, -76]
})*/

weekend_Event_Data = [
    {"name": "Art-A-Whirl 1121 Quincy", "address": "1121 Quincy St. NE", "type": "Event Food Sponsor", "contact": "Nick DuBois", "telephone": "(763) 670-0577", "location": [44.9993934, -93.2510686]},
    {"name": "Art-A-Whirl 1500 Jackson", "address": "1500 Jackson St. NE", "type": "Event Food Sponsor", "contact": "Stacy Malbon", "telephone": "(612) 239-2537", "location": [45.0040077, -93.2501971]},
    {"name": "Earl-A-Whirl", "address": "1325 Quincy St. NE", "type": "Event Food Sponsor", "contact": "Matt Reisenger", "telephone": "(612) 345-5305", "location": [45.0010276,-93.2505494]},
    {"name": "Centro-A-Whirl", "address": "1414 Quincy St. NE", "type": "Event Food Sponsor", "contact": "Jami Olson", "telephone": "(612) 345-5527", "location": [45.0027555,-93.2514505]},
    {"name": "Minari-A-Whirl", "address": "323 13th Ave NE", "type": "Event Food Sponsor", "contact": "Daniel Del Prado", "telephone": "(612) 259-8914", "location": [45.00090026855469,-93.26261901855469]},
    {"name": "Liquid Zoo", "address": "1315 Tyler St. NE", "type": "Event Food Sponsor", "contact": "Drew Hurst", "telephone": "(703) 232-8903", "location": [45.00087356567383,-93.24609375]},
    {"name": "Whirlygig 2025", "address": "711 15th Ave. NE #102", "type": "Event Food Sponsor", "contact": "Addie Kubala", "telephone": "(320) 309-9676", "location": [45.00307846069336,-93.25360107421875]},
    {"name": "NENA Food Truck Rally", "address": "5005 34th Ave S", "type": "Event Food Sponsor", "contact": "Christina Meyer", "telephone": "(612) 724-5652", "location": [44.909912109375,-93.22286987304688]},
    {"name": "White Earth Urban Community", "address": "1530 Franklin Ave E", "type": "Event Food Sponsor", "contact": "Annettee Christensen", "telephone": "(612) 508-4425", "location": [44.962730407714844,-93.25657653808594]},
    {"name": "14th Annual Seed & Plant", "address": "710 W. Broadway", "type": "Event Food Sponsor", "contact": "Sandy Peacock", "telephone": "(612) 588-7611", "location": [44.9991455078125,-93.28985595703125]},
    {"name": "Hammies At Venn Brewing", "address": "3550 46th St. E", "type": "Event Food Sponsor", "contact": "Emma Heemstra", "telephone": "(612) 887-8366", "location": [44.91965866088867,-93.22547912597656]},
    {"name": "Crush-A-Whirl", "address": "2823 Central Ave NE", "type": "Event Food Sponsor", "contact": "Tracy Molm", "telephone": "(612) 400-9394", "location": [45.0203971862793,-93.24729919433594]},


]

weekend_Event_Data.forEach(function(location) {
    let markerText = `<strong>${location.name}</strong><br>Address: ${location.address}<br>Type: ${location.type}<br>Contact: ${location.contact}<br>Telephone: ${location.telephone}`
    L.marker(location.location)
        .bindPopup(markerText).addTo(map)
})
