describe('The cool module', function() {
  beforeEach(module('cool'));
  describe('cool controller', function () {

    var coolController;
    beforeEach(
      inject(function($controller) {
        coolController = $controller('CoolController');
      })
    );
    
    // TODO: Add real tests here!
    // it('should initialize the greeting', function() {
    //   expect(homeController.greeting).toEqual('Hello World!');
    // });

  });
})