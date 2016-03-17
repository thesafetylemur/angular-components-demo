describe('The myApp module', function() {
  beforeEach(module('myApp'));
  describe('home controller', function () {

    var homeController;
    beforeEach(
      inject(function($controller) {
        homeController = $controller('HomeController');
      })
    );

    it('should initialize the greeting', function() {
      expect(homeController.greeting).toEqual('Hello World!');
    });

  });
})