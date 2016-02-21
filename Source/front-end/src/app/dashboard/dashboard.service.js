(function() {
  'use strict';
  angular.module('gulpGenerator').service('DashboardService', DashboardService);
  /** @ngInject */
  function DashboardService($http, $sessionStorage, appConfig) {
    this.getProducts = function() {
      var apiUrl = appConfig.apiBaseUri + 'dashboard/' + 'product_list';
      return $http({
        method: 'GET',
        url: apiUrl
      });
    };
    this.getProductsByCity = function() {
      var apiUrl = appConfig.apiBaseUri + 'dashboard/' + 'products_by_city';
      return $http({
        method: 'GET',
        url: apiUrl
      });
    };

    this.getOrdersByCity = function() {
      var apiUrl = appConfig.apiBaseUri + 'dashboard/' + 'orders_by_city';
      return $http({
        method: 'GET',
        url: apiUrl
      });
    };
  }
})();
