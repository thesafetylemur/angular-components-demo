(function(angular) {
  'use strict';

  angular
    .module('controllerAs', ['ngRoute'])
    .config(RouteConfig)
    .controller('FirstCtrl', FirstCtrl)
    .controller('SecondCtrl', SecondCtrl)
    .controller('ThirdCtrl', ThirdCtrl);

  function RouteConfig($routeProvider) {
    // TODO: build out as component :)
    $routeProvider
      .when('/controllerAs', {
        templateUrl: 'controllerAs/controllerAs.html'
      });
  }

  function FirstCtrl() {
    var first = this;
    first.myValue = 'First value';
  }

  function SecondCtrl() {
    var second = this;
    second.myValue = 'Second value';
  }

  function ThirdCtrl() {
    var third = this;
    third.myValue = 'Third value';
  }
})(window.angular);
