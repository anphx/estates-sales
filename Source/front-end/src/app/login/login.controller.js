(function() {
  'use strict';
  angular.module('gulpGenerator').controller('LoginController', LoginController);
  /** @ngInject */
  function LoginController($uibModalInstance, $state, $sessionStorage, appConfig, UserService) {
    var vm = this;
    vm.user = {
      email: 'anpham@mail.vn',
      password: '12345678'
    };

    vm.login = function() {
      UserService.login(vm.user).success(function(response) {
        $uibModalInstance.close(UserService.getCurrentUser());
        // navigateUserToPage($sessionStorage.user);
      }).error(function(response) {
        vm.message = response.errors;
      });
    };

    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    
  }

})();