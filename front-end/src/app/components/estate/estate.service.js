(function() {
  'use strict';
  angular.module('gulpGenerator').service('EstateService', EstateService);
  /** @ngInject */
  function EstateService($http, appConfig) {
    var apiName = "products/";

    this.getEstates = function(callback) {
      var apiUrl = 'http://localhost:1337/localhost:3000/api/products';
      $http.get(apiUrl).then(function(res) {
        // success callback
        callback(res.data, null);
      }, function(res) {
        // error callback
        callback(null, new Error('Error when loading estates.'));
      })
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