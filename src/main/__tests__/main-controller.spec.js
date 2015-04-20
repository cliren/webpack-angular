import MainController from '../main-controller';

describe('MainController', () => {
  let scope;

  beforeEach(module('MyApp'));

  beforeEach($inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('One', inject(function($controller) {

    $controller('MainController', {
      $scope: scope

    });

    expect(scope.items.length).toBe(2);
  }));
});