(function() {
  'use strict';
  angular.module('gulpGenerator').controller('AgentController', AgentController);
  /** @ngInject */
  function AgentController($scope, $state, appConfig, UserService) {
    var vm = this;
    // debugger;
    
    if(!UserService.isLoggedIn() || UserService.getCurrentUser().role != appConfig.userRole.agent){
      $state.go('home');
    }
    vm.previews = [];

    vm.fileChanged = function(fileTag) {
      // debugger;
      // alert('image changed');
      vm.image = fileTag.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        vm.previews.push(e.target.result);
        $scope.$apply();
      };
      reader.readAsDataURL(vm.image);
    }

    vm.reset = function(){
      // alert('reset');
      vm.previews = [];
      $scope.$apply();
    }
  }
})();