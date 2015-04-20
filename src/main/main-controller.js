
require('./main.less');
class MainController {
  constructor($scope) {
    $scope.title = 'My App';

    $scope.items = [
      {
        name: 'One'
      },
      {
        name: 'Two'
      }
    ];
  }
}

MainController.$inject = ['$scope'];

export default MainController

