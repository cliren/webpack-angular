import'angular/angular';
import 'angular-route/angular-route';
import MainController from './main/main-controller';

angular.module('MyApp', ['ngRoute'])
  .controller('MainController', MainController)
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);