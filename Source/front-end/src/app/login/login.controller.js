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
        $uibModalInstance.dismiss('cancel');
        navigateUserToPage($sessionStorage.user);
      }).error(function(response) {
        vm.message = response.errors;
      });
    };

    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    function navigateUserToPage(user) {
      // alert ('navigating....', user);
      switch(user.role) {
        case appConfig.userRole.admin: 
          $state.go('dashboard');
          break;
        default:
          $state.go('home');
          break;
      }
    };
    
  }

})();