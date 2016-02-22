(function() {
  'use strict';
  angular.module('gulpGenerator').service('UserService', UserService);
  /** @ngInject */
  function UserService($http, $sessionStorage, appConfig) {
    var that = this;

    this.getCurrentUser = function() {
      return $sessionStorage.user;
    }
    this.setCurrentUser = function(user) {
      $sessionStorage.user = user;
      $sessionStorage.sessionId = user.auth_token;
    }

    this.logout = function() {
      delete $sessionStorage.user;
      delete $sessionStorage.sessionId;
    }

    this.isLoggedIn = function(){
      return $sessionStorage.user != null;
    }

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
        that.setCurrentUser(response.user);
      });
    };
  }
})();
