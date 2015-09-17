/**
 * Created by nielshansen on 14/09/15.
 */

angular.module('starter.geolist', [])

  .factory('GeoList', function () {

    var geolist =

        [
          {state: "AK", lat: 61.3850, lng: -152.2683},
          {state: "AL", lat: 32.7990, lng: -86.8073},
          {state: "AR", lat: 34.9513, lng: -92.3809},
          {state: "AS", lat: 14.2417, lng: -170.7197},
          {state: "AZ", lat: 33.7712, lng: -111.3877},
          {state: "CA", lat: 36.1700, lng: -119.7462},
          {state: "CO", lat: 39.0646, lng: -105.3272},
          {state: "CT", lat: 41.5834, lng: -72.7622},
          {state: "DC", lat: 38.8964, lng: -77.0262},
          {state: "DE", lat: 39.3498, lng: -75.5148},
          {state: "FL", lat: 27.8333, lng: -81.7170},
          {state: "GA", lat: 32.9866, lng: -83.6487},
          {state: "HI", lat: 21.1098, lng: -157.5311},
          {state: "IA", lat: 42.0046, lng: -93.2140},
          {state: "ID", lat: 44.2394, lng: -114.5103},
          {state: "IL", lat: 40.3363, lng: -89.0022},
          {state: "IN", lat: 39.8647, lng: -86.2604},
          {state: "KS", lat: 38.5111, lng: -96.8005},
          {state: "KY", lat: 37.6690, lng: -84.6514},
          {state: "LA", lat: 31.1801, lng: -91.8749}
        ]
      ;

    return {
      getAll: function(){
        return geolist;
      }
    }

  })
