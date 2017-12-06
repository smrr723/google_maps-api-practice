var initialise = function(){
   var container = document.getElementById('main-map');
   var center = {lat: 55.856, lng: -4.244};
   var mtFuji = {lat: 23.766, lng: -2.999};
   var mainMap = new MapWrapper(container, center, 10);
   mainMap.addMarker(center);
   mainMap.addMarker(mtFuji);
   mainMap.addClickEvent();

   var teleportButton =
   document.getElementById('button-teleport');

   teleportButton.addEventListener('click',function(){
      var tokyo = {lat: 35.689487, lng: 139.691706};
      mainMap.googleMap.setCenter(tokyo);
  });

   var bounceButton = document.getElementById('button-bounce-markers');
   bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
}



window.addEventListener('load', initialise);
