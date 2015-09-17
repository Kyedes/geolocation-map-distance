/**
 * Created by nielshansen on 14/09/15.
 */


angular.module('starter.geoMap', [])


  .controller('MapGeoCtrl', function ($scope, $ionicLoading, $ionicPopup, GeoList) {

    $scope.positions = GeoList.getAll();

    $scope.$on('mapInitialized', function (event, map) {
      $scope.map = map;
    });


    $scope.centerOnMe = function () {

      //If you want
      //$scope.positions = [];


      /* Splash */
      $ionicLoading.show({
        template: 'Loading...'
      });

      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        $scope.positions.push({lat: position.coords.latitude, lng: position.coords.longitude});
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        $scope.map.setCenter(pos);
        $scope.distances = [];
        angular.forEach($scope.positions, function (mark) {

          var dis = calculateDistance(position.coords, mark);

          console.log((dis / 1000) + " km")


        })


        $ionicLoading.hide();

      };

      function error(error) {
        console.log(error);
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: "Error code: " + error.code,
          template: error.message
        });
      };

      // This is our get position function!
      navigator.geolocation.getCurrentPosition(success, error, options);


      /* function to calc radius */
      var rad = function (x) {
        return x * Math.PI / 180;
      }

      /* CALCULATE DISTANCE */
      function calculateDistance(p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat - p1.latitude);
        var dLong = rad(p2.lng - p1.longitude);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
      }
    }
  });
