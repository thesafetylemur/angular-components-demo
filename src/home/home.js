(function(angular) {
  'use strict';
  angular
    .module('home', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/home', {
          template: '<home></home>'
        })
        .otherwise({
          redirectTo: '/home'
        });
    })
    .controller('HomeCtrl', HomeCtrl)
    .component('home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'hc'
    });

    function HomeCtrl() {
      var homeCtrl = this;
      homeCtrl.greeting = 'Hello World!';
    }
})(window.angular);