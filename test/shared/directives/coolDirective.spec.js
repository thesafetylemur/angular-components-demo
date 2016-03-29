describe('The coolDirective module', function() {
  beforeEach(module('coolDirective'));

  var scope, directiveElement;

  beforeEach(function(){
    var compile,
        element = angular.element(
          '<cool-directive>Here is my cool directive!</cool-directive>');

    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });

    directiveElement = compile(element)(scope);
    scope.$digest();
  });

  it('should not initialize the style on load', function() {
    expect(scope.myStyle).toBeDefined();
  });

  it('should change the style on setRandom', function() {
    var originalStyle = angular.copy(scope.myStyle);
    scope.setRandom();
    expect(originalStyle).not.toEqual(scope.myStyle);
  })

});