(function() {
    'use strict';
    angular.module('gulpGenerator').service('EstateService', EstateService);
    /** @ngInject */
    function EstateService($http) {
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
    }
})();