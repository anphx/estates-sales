(function() {
  'use strict';
  angular.module('gulpGenerator').controller('MainController', ['EstateService', 'uiGmapIsReady', MainController]);
  /** @ngInject */
  function MainController(estateService, uiGmapIsReady) {
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
    
    // uiGmapIsReady.promise(1).then(function(instances) {
    //   instances.forEach(function(inst) {
    //     var map = inst.map;
    //     var uuid = map.uiGmap_id;
    //     var mapInstanceNumber = inst.instance; // Starts at 1.
    //   });
    // });

    vm.data = [];
    estateService.getEstates(function(data, error) {
      if (error != null) {
        alert(error.message);
        return;
      }
      vm.data = data;
    });
  }
})();