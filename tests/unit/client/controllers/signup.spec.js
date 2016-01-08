describe('Controller: Signup Controller', function() {
  // new instance of the module
  beforeEach(angular.mock.module('frodocms'));

  var controller, $rootScope, $scope, User;
  // instantiate the main controller
  beforeEach(angular.mock.inject(function($injector, $controller) {
    controller = $controller('SignupController');
    $rootScope = $injector.get('$rootScope');
    User = $injector.get('User');
    $scope = $rootScope.$new();
  }));

  describe('Initialization', function() {
    it('should verify that doSignup function is defined', function() {
      expect(controller.doSignup).toBeDefined();
    });
  });
});