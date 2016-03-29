describe('The controllerAs module', function() {

  beforeEach(module('controllerAs'));

  describe('First controller', function () {
    var firstController;
    beforeEach(
      inject(function($controller) {
        firstController = $controller('FirstCtrl');
      })
    );

    it('should initialize the controller', function() {
      expect(firstController).toBeDefined();
    });

    it('should initialize the value', function() {
      expect(firstController.myValue).toBeDefined();
    });
  });

  describe('Second controller', function () {
    var secondController;
    beforeEach(
      inject(function($controller) {
        secondController = $controller('SecondCtrl');
      })
    );

    it('should initialize the controller', function() {
      expect(secondController).toBeDefined();
    });

    it('should initialize the value', function() {
      expect(secondController.myValue).toBeDefined();
    });
  });

  describe('Third controller', function () {
    var thirdController;
    beforeEach(
      inject(function($controller) {
        thirdController = $controller('ThirdCtrl');
      })
    );

    it('should initialize the controller', function() {
      expect(thirdController).toBeDefined();
    });

    it('should initialize the value', function() {
      expect(thirdController.myValue).toBeDefined();
    });
  });

});