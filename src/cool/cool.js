(function(angular) {
  'use strict';

  angular
    .module('cool', ['ngRoute', 'coolDirective'])
    .config(RouteConfig)
    .controller('CoolCtrl', CoolCtrl)
    .component('cool', {
      templateUrl: 'cool/cool.html',
      controller: 'CoolCtrl',
      controllerAs: 'cc'
    });

  function RouteConfig($routeProvider) {
    $routeProvider
      .when('/cool', {
        template: '<cool></cool>'
      });
  }

  function CoolCtrl() {
    var cc = this;
    cc.myValue = "test";
    // members and functions go here! :)
  }
})(window.angular);