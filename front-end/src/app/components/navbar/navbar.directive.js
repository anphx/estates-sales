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
    function NavbarController($uibModal, $sessionStorage) {
      var vm = this;
      // "vm.creation" is avaible by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
      // 
      vm.isLoggedIn = $sessionStorage.user != undefined;
      vm.loginText = vm.isLoggedIn ? $sessionStorage.user.full_name : "Login";
      vm.open = function() {
        if ($sessionStorage.user != undefined) return;

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
            
        });

        modalInstance.result.then(function(selectedItem) {
            // $scope.selected = selectedItem;
        }, function() {
            // $log.info('Modal dismissed at: ' + new Date());
        });
      }
    }
  }
})();