angular.module('ngapp1')
    .controller('myCtrl',function($scope,ngapp1Service){

       $scope.angular1Click=function(){
       console.log('Angular 1 clicked in controller');
           $scope.angular1clicked='A1';
           ngapp1Service.angular1Click();
}
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
