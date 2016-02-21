(function() {
  'use strict';
  angular.module('gulpGenerator').controller('DashboardController', DashboardController);
  /** @ngInject */
  function DashboardController(EstateService) {
    var vm = this;
    vm.map = {
      center: {
        latitude: 51.219053,
        longitude: 4.404418
      },
      zoom: 14
    };
    vm.options = {
      scrollwheel: false
    };
    vm.data = [];
    EstateService.getEstates(function(data, error) {
      if (error != null) {
        alert(error.message);
        return;
      }
      vm.data = data;
    });
  }
})();