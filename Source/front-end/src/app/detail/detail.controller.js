(function() {
  'use strict';
  angular.module('gulpGenerator').controller('DetailController', DetailController);
  /** @ngInject */
  function DetailController($stateParams, EstateService) {
    var vm = this;
    vm.product = {};

    EstateService.getEstateById($stateParams.id).success(function(response) {
      vm.product = response.product;
      vm.map = {
        center: {
          latitude: vm.product.address.latitude,
          longitude: vm.product.address.longitude
        },
        zoom: 5
      };
    });
  
    vm.placeOrder = function(){

      EstateService.placeOrder($stateParams.id).success(function(response){
        console.log('place order successfully.');
        console.log(response);
      });
    }
  }
})();