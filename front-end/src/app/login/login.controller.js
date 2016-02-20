(function() {
  'use strict';
  angular.module('gulpGenerator').controller('LoginController', ['$uibModalInstance', '$state', 'UserService', LoginController]);
  /** @ngInject */
  function LoginController($uibModalInstance, $state, UserService) {
    var vm = this;
    vm.login = function() {
      console.log(vm.user.username + '-' + vm.user.password);
      UserService.login(vm.user, function(user, error) {
        if (error != null) {
          alert(error.message);
        }
        if (user.role == 1) $state.go('dashboard');
        // if()
      });
    };
    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();