
var MapWrapper = function(container, coords, zoom){
   // var container = document.getElementById('main-map');
   this.googleMap = new google.maps.Map(container, {
      center: coords,
      zoom: 10
   });
   this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords){
   var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
   });
   this.markers.push(marker);
   var infowindow = new google.maps.InfoWindow({
     content: "You placed a marker!"
   });
   marker.addListener('click', function(event) {
   // infowindow.content = "Hello world";
    infowindow.open(marker.map, marker);
  });
}

MapWrapper.prototype.addClickEvent = function(){
   google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
      // var marker = new google.maps.Marker({
      //    position: {lat: event.latLng.lat(), lng: event.latLng.lng()},
      //    map: this.googleMap
      // });
      console.log("We have clickage");
      console.log(event);
      console.log(event.latLng.lat());
   }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function(){
   this.markers.forEach(function(marker){
      marker.setAnimation(google.maps.Animation.BOUNCE);
   })
}
