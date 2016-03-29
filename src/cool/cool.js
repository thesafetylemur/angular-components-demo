(function(angular) {
  'use strict';

  angular
    .module('cool', ['ngRoute', 'coolDirective'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/cool', {
          template: '<cool></cool>'
        });
    })
    .controller('CoolCtrl', CoolCtrl)
    .component('cool', {
      templateUrl: 'cool/cool.html',
      controller: 'CoolCtrl',
      controllerAs: 'cc'
    });

    function CoolCtrl() {
      var cc = this;
      // members and functions go here! :)
    }
})(window.angular);