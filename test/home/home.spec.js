describe('The home module', function() {
  beforeEach(module('home'));
  describe('home controller', function () {

    var homeController;
    beforeEach(
      inject(function($controller) {
        homeController = $controller('HomeCtrl');
      })
    );

    it('should initialize the greeting', function() {
      expect(homeController.greeting).toEqual('Hello World!');
    });

  });
});