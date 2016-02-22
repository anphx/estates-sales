(function() {
  'use strict';
  angular.module('gulpGenerator').directive('acmeNavbar', acmeNavbar);
  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
    /** @ngInject */
    function NavbarController($uibModal, $sessionStorage, $state, appConfig, UserService) {
      var vm = this;
      // "vm.creation" is avaible by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
      // 
      // debugger;
      
      vm.isLoggedIn = UserService.isLoggedIn;

      vm.avatarUrl = "";
      vm.fullname = "";
      vm.email = "";
      vm.role = -1;
      vm.currentUser = null;

      if (vm.isLoggedIn()) {
        vm.currentUser = UserService.getCurrentUser();
        
        // vm.avatarUrl = UserService.getCurrentUser().avatar_url;
        // vm.fullname = UserService.getCurrentUser().full_name;
        // vm.email = UserService.getCurrentUser().email;
        //   vm.role = UserService.getCurrentUser().role;
      }
 
      vm.getUser = function() {
        debugger;
        if (vm.isLoggedIn) return UserService.getCurrentUser();
      }
      vm.open = function() {
        if ($sessionStorage.user != undefined) return;
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: '/app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        });
        modalInstance.result.then(function(user) {
          // logined
          debugger;
          // vm.isLoggedIn = true;
          navigateUserToPage(user);
        }, function() {
          // $log.info('Modal dismissed at: ' + new Date());
          // debugger;
          console.log('Close login dialog');
        });
      }
      vm.logout = function() {
        // debugger;
        UserService.logout();
        // vm.isLoggedIn = false;
        // $state.go('home');
        // go back to unlogin state
      }

      function navigateUserToPage(user) {
        debugger;
        switch (user.role) {
          case appConfig.userRole.admin:
            $state.go('dashboard');
            break;
          case appConfig.userRole.agent:
            $state.go('agent');
            break;
          default:
            $state.go('home');
            break;
        }
      };
    }
  }
})();