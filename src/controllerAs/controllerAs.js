(function(angular) {
  'use strict';

  angular
    .module('controllerAs', ['ngRoute'])
    .config(function($routeProvider) {
      // TODO: build out as component :)
      $routeProvider
        .when('/controllerAs', {
          templateUrl: 'controllerAs/controllerAs.html'
        });
    })
    .controller('FirstCtrl', FirstCtrl)
    .controller('SecondCtrl', SecondCtrl)
    .controller('ThirdCtrl', ThirdCtrl);

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
