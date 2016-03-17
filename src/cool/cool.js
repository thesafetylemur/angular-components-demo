(function(angular){
  'use strict';
  angular
    .module('cool', [])
    .config(function($routeProvider){
      $routeProvider
        .when('/cool', {
          template: '<cool></cool>'
        });
    })
    .controller('CoolController', CoolController)
    .component('cool', {
      templateUrl: 'cool/cool.html',
      controller: 'CoolController',
      controllerAs: 'cc'
    });

    function CoolController() {
      console.log('Initializing CoolController!');
      var cc = this;
      // members and functions go here! :)
    }
})(window.angular);