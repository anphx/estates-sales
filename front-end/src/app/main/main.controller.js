(function() {
  'use strict';
  angular.module('gulpGenerator').controller('MainController', MainController);
  /** @ngInject */
  function MainController(EstateService) {
    var vm = this;
    vm.map = {
      center: {
        latitude: 36.110109,
        longitude: -115.339278
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
      vm.data = data.products.slice(0,10);
    });
  }
})();