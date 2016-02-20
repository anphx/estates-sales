(function() {
    'use strict';
    angular.module('gulpGenerator').service('EstateService', ['$http', estateService]);
    /** @ngInject */
    function estateService($http) {
        this.getEstates = function(callback) {
            $http.get('../data/estate.json').then(function(res) {
              // success callback
              callback(res.data, null);
            }, function(res) {
              // error callback
              callback(null, new Error('Error when loading estates.'));
            })
        };
    }
})();