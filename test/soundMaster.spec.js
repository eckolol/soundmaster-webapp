
describe('soundMaster', function () {

  // load the controller's module
  beforeEach(module('soundMaster'));

  var AppCtrl,
      scope;

  //Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {
      $scope: scope
    });
  }));

  it('should call the underlying socket.disconnect', function () {
    scope.play();
  });

});
