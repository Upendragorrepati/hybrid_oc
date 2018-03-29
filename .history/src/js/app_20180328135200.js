angular.module('interestApp', ['ui.router'])
.service('PinsService', function($http, $q) {
  this._pins = null;

  this.pins = function() {
    var self = this;
    if(self._pins == null) {
      // initialize with sample data
      return $http.get("/assets/data/sample-data.json").then(
        function(response) {
          self._pins = response.data;
          return self._pins;
        });
    } else {
      return $q.when(self._pins);
    }
  }

  this.addPin = function(newPin) {
    console.log('addPin', newPin);
    // adding would normally be an API request so lets mock async
    return $q.when(
      this._pins.unshift(newPin)
    );
  }
})


.controller('HomeController', function(pins, AnalyticsService) {
  AnalyticsService.recordEvent('HomeControllerVisited');
  this.pins = pins;
})
.directive('ngapp1', function(AnalyticsService) {
  return {
    restrict: 'E',
    templateUrl: 'ngapp1/ngapp1.html',
    scope: {
      'pin': "=item"
    },
    link: function(scope, elem, attrs) {
      scope.toggleFav = function() {
        AnalyticsService.recordEvent('PinFaved');
        scope.pin.faved = !scope.pin.faved;
      }
    }
  }
})


//
