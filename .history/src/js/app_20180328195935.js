angular.module('interestApp', ['ui.router'])
.service('ngap1Service', function($http, $q) {
  this._event = null;

  this.getEvent = function() {
    return this._event;
  }

  this.setEvent = function(e) {
    console.log('event recieved', e);
    // adding would normally be an API request so lets mock async
    this._event = e;
  }
})


// .controller('HomeController', function(pins, AnalyticsService) {
//   AnalyticsService.recordEvent('HomeControllerVisited');
//   this.pins = pins;
// })
.directive('ngapp1', function(AnalyticsService) {
  return {
    restrict: 'E',
    templateUrl: 'ngapp1/ngapp1.html',
    scope: {
      'pin': "=item"
    },
    link: function(scope, elem, attrs) {
      scope.toggleFav = function() {
        // AnalyticsService.recordEvent('PinFaved');
        window.alert('arash');
        scope.pin.faved = !scope.pin.faved;
      }
    }
  }
})


//
