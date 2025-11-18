var map;


async function initMap() {
	var iitChicago = { lat: 41.8349, lng: -87.6270 };

	map = new google.maps.Map(document.getElementById("map"), {
		center: iitChicago,
		zoom: 15,
		mapId: "DEMO_MAP_ID",
	});

	const marker = new google.maps.marker.AdvancedMarkerElement({
			map,
			position: iitChicago,
			title: 'Illinois Institute of Technology',
	});

	var contents = `
		<h1 id="firstHeading" class="firstHeading">Illinois Institute of Technology</h1>
		<div>
			<p><b>Illinois Institute of Technology</b>, also referred to as <b>IIT Chicago</b>, is a private research university in Chicago, Illinois. It is known for its programs in engineering, science, and technology.</p>
			<p>Attribution: Illinois Institute of Technology, <a href="https://en.wikipedia.org/wiki/Illinois_Institute_of_Technology">
				https://en.wikipedia.org/wiki/Illinois_Institute_of_Technology</a> (last visited June 22, 2009).</p>
		</div>
	`;
	

const infowindow = new google.maps.InfoWindow({
    content: contents,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

	document.getElementById("img").addEventListener("click", () => {
		console.log("clicked");
		alert("If you have questions, contact me at: jhan38@hawk.illinoistech.edu");
	});
}
