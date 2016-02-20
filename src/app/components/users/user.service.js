(function() {
    'use strict';
    angular.module('gulpGenerator').service('UserService', ['$http', UserService]);
    /** @ngInject */
    function UserService($http) {
        this.login = function(user, callback) {
            $http.get('../data/users.json').then(function(res) {
              // success callback
              var flag = true;
              $.each(res.data, function(index, u){
                console.log(u.email + '-' + u.password);
                // debugger;
                if(user.email == u.email && user.password == u.password){
                  callback(u, null);

                  flag = false;
                }
              });
              
              if(flag)
                callback(null, new Error('Username or password is wrong.'));
            }, function(res) {
              // error callback
              callback(null, new Error('Error when loggin.'));
            })
        };
    }
})();