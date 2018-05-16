// The script is based on the tutorials' code

//script that loads the map
var mymap=L.map('mapid').setView([51.52458,-0.13332],16);
		
//script that loads the tiles and add them to the map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',{
	maxZoom:18,
	attribuition:'Map data&copy; ,<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id:'mapbox.streets'
}).addTo(mymap);
