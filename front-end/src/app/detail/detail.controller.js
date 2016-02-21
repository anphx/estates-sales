(function() {
  'use strict';
  angular.module('gulpGenerator').controller('DetailController', DetailController);
  /** @ngInject */
  function DetailController($stateParams, EstateService) {
    var vm = this;
    vm.product = {};

    EstateService.getEstateById($stateParams.id).success(function(response){
      // debugger;
      vm.product = response.product;
      vm.map = {
        center: {
          latitude: vm.product.address.latitude,
          longitude: vm.product.address.longitude
        },
        zoom: 14
      };
    })
    
    // vm.product = {
    //   id: $stateParams.id,
    //   images: "http://ap.rdcpix.com/142029107/c3d5b8c65584d753a1a3a35898451bedl-m0xd-w640_h480_q80.jpg ||" 
    //   + "http://ap.rdcpix.com/1176702658/c3d5b8c65584d753a1a3a35898451bedl-m1xd-w640_h480_q80.jpg ||" 
    //   + "http://ap.rdcpix.com/890873050/50fbf775783637910adfb4032372dcf8l-m0xd-w1020_h770_q80.jpg",


    // };
    
  }
})();