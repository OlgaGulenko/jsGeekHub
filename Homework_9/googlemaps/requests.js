let elem = document,
		element = elem.getElementById('map'),
		search = elem.getElementById('search'),
		button = elem.getElementById('button'),
		h2 = elem.getElementById('h2'),
		lat = elem.getElementById('lat'),
		lng = elem.getElementById('lng');


function initMap(location) {
	let map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 49.444433, lng: 32.059767},
		scrollwheel: true,
		zoom: 7,
		mapTypeId: 'terrain'
	});
	let marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});


	marker.addListener('click', function () {
		InfoWindow.open(map, marker);
	});
}

search.onkeyup = function () {
	if(this.value) {
		h2.textContent = this.value;
	} else if(this.value === '') {
		h2.textContent = 'google map';
	}
};

button.onclick = function () {
	let location = {},
			urlStr = 'https://maps.googleapis.com/maps/api/geocode/json?address=${' + search.value + '},&key=AIzaSyDGK-_eLKmQcU-s_XmCS2UYRANVqk2fQ-Q';

	jQuery.get(urlStr, function (data) {
		if (data.status === 'OK') {
			location = data.results[0].geometry.location;
			address = data.results[0].formatted_address;
			lat.textContent = 'LAT: ' + location.lat + ', ';
			lng.textContent = 'LNG: ' + location.lng;
			initMap(location);
		} else {
			h2.textContent = 'Invalid address format!';
		}
	});
};
