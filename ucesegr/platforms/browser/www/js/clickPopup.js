// The script is based on the tutorials' code

// create a custom popup
var popup=L.popup();
		
// create a function which show a pop-up once the user clicks on the map
// the pop-up shows the coordinates of the location where the user clicked
function onMapClick(e) {
	popup.setLatLng(e.latlng).setContent("Coordinates for clicked point " + e.latlng.toString()).openOn(mymap);
	}

// add the click event detector to the map
// the click event uses the onMapClick function to show the pop-up
mymap.on('click', onMapClick);