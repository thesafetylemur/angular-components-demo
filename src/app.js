(function(angular) {
  angular
    .module('myApp', ['ngRoute','cool'])
    .config(function($routeProvider){
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
      templateUrl: 'home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    });

    function HomeController() {
      console.log('Initializing HomeController..!');
      var homeCtrl = this;
      homeCtrl.greeting = 'Hello World!';
    }

})(window.angular);