
describe('soundMaster', function () {

  // load the controller's module
  beforeEach(module('soundMaster'));

  var PocCtrl,
      scope;

  //Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PocCtrl = $controller('PocCtrl', {
      $scope: scope
    });
  }));

  it('should call the underlying socket.disconnect', function () {
    scope.play();
  });

});
