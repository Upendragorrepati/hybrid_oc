angular.module('ngapp1')
.directive('eventHandler', function(ngapp1Service) {
  return {
    restrict: 'E',
    templateUrl: '/assets/ngapp1.html',
    link: function(scope, elem, attrs) {
      scope.sendEvent = function(e) {
        ngapp1Service.setEvent(e);
          ngapp1Service.angular1Click();

      }

      scope.$watch(function(){
        return ngapp1Service.getEvent();
          }, function(newValue, oldValue){
            scope._event = newValue;
      });
        scope.$watch(function(){
            return ngapp1Service.getangular1Click();
        }, function(newValue, oldValue){
            scope.val = newValue;
        });


    }
  }
})


//
