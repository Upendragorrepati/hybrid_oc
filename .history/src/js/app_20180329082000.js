angular.module('ngapp1', ['ui.router'])
.service('ngapp1Service', function($http, $q) {
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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      templateUrl: 'js/home.html',
      // controller: 'HomeController as ctrl',
      url: '/',

    })
    // .state('add', {
    //   template: "<add-pin></add-pin>",
    //   url: '/add',
    //   resolve: {
    //     'pins': function(PinsService) {
    //       return PinsService.pins();
    //     }
    //   }
    // })

    $urlRouterProvider.when('', '/') ;
})

// .controller('HomeController', function(pins, AnalyticsService) {
//   AnalyticsService.recordEvent('HomeControllerVisited');
//   this.pins = pins;
// })
.directive('eventHandler', function(AnalyticsService, ngapp1Service) {
  return {
    restrict: 'E',
    templateUrl: 'ngapp1/ngapp1.html',
    link: function(scope, elem, attrs) {
      console.log('arash');
      scope.sendEvent = function(e) {
        // AnalyticsService.recordEvent('PinFaved');
        window.alert('arash');
        ngapp1Service.setEvent(e);
      }


      scope.$watch(function(){
        return ngapp1Service.getEvent();
          }, function(newValue, oldValue){
            scope._event = newValue;
      });

    }
  }
})


//
