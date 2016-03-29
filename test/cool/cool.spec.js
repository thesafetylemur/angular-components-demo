describe('The cool module', function() {
  beforeEach(module('cool'));
  describe('cool controller', function () {

    var coolController;
    beforeEach(
      inject(function($controller) {
        coolController = $controller('CoolCtrl');
      })
    );

    it('should initialize the controller', function() {
      expect(coolController).toBeDefined();
    });

    // TODO: Add real tests here!
  });
});