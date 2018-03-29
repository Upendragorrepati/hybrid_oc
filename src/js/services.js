angular.module('ngapp1')
.service('ngapp1Service', function($http, $q) {
  this._event = null;
  this.val=null;

  this.getEvent = function() {
    return this._event;
  }

  this.setEvent = function(e) {
    console.log('event recieved', e);
    this._event = e;
  }
  this.angular1Click=function(val){
    console.log('angular1Click callled in service',val);
   this.val=val;
  }
    this.getangular1Click=function(){
        //console.log('angular1Click callled in service',val);
        return this.val+" ------(Event from Angular 2 received in Angular 1)";
    }

});
