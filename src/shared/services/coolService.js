(function(angular, random) {
  'use strict';

  // Need to declare random as a local variable to make it minification-safe.. :(
  var randomColor = random;

  angular
    .module('coolService', [])
    .service('RandomColorService', RandomColorService);
    function RandomColorService() {
      var service = {};

      service.getRandomColor = function() {
        // TODO: wrap in promise to demo handling promises!
        return randomColor();
      };
      
      return service;
    }
})(window.angular, window.randomColor);