(function(angular, random) {
  'use strict';
  
  // Need to declare random as a local variable to make it minification-safe.. :(
  var randomColor = random;

  angular
    .module('cool', [])
    .config(function($routeProvider) {
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
    })
    .directive('coolDirective', CoolDirective);

    function CoolController() {
      var cc = this;
      // members and functions go here! :)
    }

    function CoolDirective() {
      var link = function(scope, element, attrs, ctrl) {
        // scope is an Angular scope object
        // element is the jQuery (or jqQLite) wrapped element this directive matches
        // attrs is a hash object with key-value pairs of the element attributes and values
        // controller is the directive's controller instance

        scope.myStyle = {}; 

        scope.setRandom = function() {
          // note that randomColor is a third-party dependency
          // managed by bower and made available globally. 
          scope.myStyle['background-color'] = randomColor();
        };
      };

      return {
        link: link,
        restrict: 'E',
        transclude: true,
        template: '<div><ng-transclude></ng-transclude><br><button ng-style="myStyle" ng-click="setRandom()">Make Something Cool Happen</button></div>'
      };
    }
})(window.angular, window.randomColor);