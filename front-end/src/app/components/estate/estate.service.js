(function() {
  'use strict';
  angular.module('gulpGenerator').service('EstateService', EstateService);
  /** @ngInject */
  function EstateService($http, appConfig) {
    var apiName = "products/";
    this.getEstates = function(params) {
      var apiUrl = appConfig.apiBaseUri + 'products' + params;
      return $http({
        method: 'GET',
        url: apiUrl
      });
    };
    this.getEstateById = function(id) {
      var apiUrl = appConfig.apiBaseUri + apiName + id;
      return $http({
        method: 'GET',
        url: apiUrl,
        data: {
          id: id
        }
      });
    };
  }
})();