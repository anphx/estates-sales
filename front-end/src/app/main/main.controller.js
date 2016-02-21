(function() {
  'use strict';
  angular.module('gulpGenerator').controller('MainController', MainController);
  /** @ngInject */
  function MainController($state, EstateService) {
    var vm = this;
    initialize();
    vm.data = [];

    function initialize() {
      var params = vm.keyword ? "?keyword=" + vm.keyword : "";
      EstateService.getEstates(params).success(function(response) {
        vm.data = response.products.slice(0,10);
        vm.map = {
          center: {
            latitude: vm.data[0].address.latitude,
            longitude: vm.data[0].address.longitude
          },
          zoom: 5
        };
        vm.options = {
          scrollwheel: false
        };
      }).error(function(response) {
        alert(response.errors);
      });
    };

    vm.search = function() {
      initialize();
    };
    
    vm.viewDetail = function(id) {
      debugger;
      $state.go('detail', {id: id});
    }
  }
})();
