(function() {
  'use strict';
  angular.module('gulpGenerator').config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard'
    }).state('detail', {
      url: '/detail/:id',
      templateUrl: 'app/detail/detail.html',
      controller: 'MainController',
      controllerAs: 'main'
    });
    
    $urlRouterProvider.otherwise('/');
  }
})();