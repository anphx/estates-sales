(function() {
  'use strict';
  angular.module('gulpGenerator').controller('AgentController', AgentController);
  /** @ngInject */
  function AgentController($scope, DTOptionsBuilder, EstateService, DashboardService) {
    var vm = this;
    // debugger;
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