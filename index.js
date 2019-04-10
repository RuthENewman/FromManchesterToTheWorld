function initMap() {
  let options = {
    zoom: 12,
    center: {
      lat: 53.4808,
      lng: -2.2426
    }
  }

  let map = new google.maps.Map(document.querySelector('#map'), options)

  addMarker({
    coords:{
      lat: 53.474331436,
      lng: -2.240332372},
    iconImage: "./beeicon.png",
    content: "<h3>Albert Square</h3>"
});

  addMarker({
    coords:{
      lat: 53.4624,
      lng: -2.2900},
    iconImage: './football.png',
    content: "<h3>Old Trafford Football Stadium</h3>"
  });

  addMarker({
    coords:{
      lat: 53.4600,
      lng: -2.2163},
    iconImage: './beeicon.png',
    content: "<h3>Victoria Baths</h3>"
  });

  addMarker({
    coords:{
      lat: 53.4039,
      lng: -2.2804},
    iconImage: './beeicon.png',
    content: "<h3>Wythenshawe Park</h3>"
  })

  addMarker({
    coords:{
      lat: 53.4603,
      lng: -2.2293},
    iconImage: './beeicon.png',
    content: "<h3>Whitworth Art Gallery</h3>"
  })

  addMarker({
  coords:{
    lat: 53.4831,
    lng: -2.2163},
    iconImage: './theatre.png',
    content: "<h3>Hope Mill Theatre</h3>"
  })

  addMarker({
  coords:{
    lat: 53.4636,
    lng: -2.2211},
   iconImage: './beeicon.png',
  content: "<h3>Elizabeth Gaskell House</h3>"
  })

  addMarker({
  coords: {
    lat: 53.4825,
    lng: -2.2445},
  iconImage: './theatre.png',
  content: "<h3>Royal Exchange Theatre</h3>"
  })

  addMarker({
  coords: {
    lat: 53.4737,
    lng: -2.2464},
  iconImage: './theatre.png',
  content: "<h3>HOME Manchester</h3>"
  })

  addMarker({
    coords: {
      lat: 53.5030,
      lng: 2.2336
    },
  iconImage: './beeicon.png',
  content: "<h3>Museum of Transport, Greater Manchester</h3>"
  })

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });

    }
  }


}
