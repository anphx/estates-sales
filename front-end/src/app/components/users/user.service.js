(function() {
  'use strict';
  angular.module('gulpGenerator').service('UserService', UserService);
  /** @ngInject */
  function UserService($http, $sessionStorage, appConfig) {
    this.login = function(user) {
      var apiUrl = appConfig.apiBaseUri + 'sessions';
      return $http({
        method: 'POST',
        url: apiUrl,
        data: {
          session: {
            email: user.email,
            password: user.password
          }
        }
      }).success(function(response) {
        $sessionStorage.user = response.user;
        $sessionStorage.sessionId = response.user.auth_token;
      }).error(function(error) {
        return new Error('Username or password is wrong.');
      });
    };
  }
})();
