describe('The coolService module', function() {
  beforeEach(module('coolService'));

  var RandomColorService;

  beforeEach(inject(function(_RandomColorService_) {
    RandomColorService = _RandomColorService_;
  }));

  it('should retrieve a random hex color on getRandomColor', function() {
    var color = RandomColorService.getRandomColor();
    expect(color).toBeDefined();
    expect(color).not.toEqual(RandomColorService.getRandomColor());
  });

});