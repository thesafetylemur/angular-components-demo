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
    .controller('HomeController', HomeController)
    .component('home', {
      templateUrl: 'home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    });

    function HomeController() {
      var homeCtrl = this;
      homeCtrl.greeting = 'Hello World!';
    }
})(window.angular);