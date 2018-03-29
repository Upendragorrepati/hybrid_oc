angular.module('ngapp1')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      templateUrl: '/assets/home.html',
      url: '/',
    })
    $urlRouterProvider.when('', '/') ;
})

// .directive('eventHandler', function(ngapp1Service) {
//   return {
//     restrict: 'E',
//     templateUrl: '/assets/ngapp1.html',
//     link: function(scope, elem, attrs) {
//       console.log('arash');
//       scope.sendEvent = function(e) {
//         ngapp1Service.setEvent(e);
//       }
//       scope.$watch(function(){
//         return ngapp1Service.getEvent();
//           }, function(newValue, oldValue){
//             scope._event = newValue;
//       });

//     }
//   }
// })


//
