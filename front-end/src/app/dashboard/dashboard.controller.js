(function() {
  'use strict';
  angular.module('gulpGenerator').controller('DashboardController', DashboardController);
  /** @ngInject */
  function DashboardController(DTOptionsBuilder, EstateService, DashboardService) {
    var vm = this;
    
    vm.products = [];
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('simple_numbers')
        .withDisplayLength(5)
        .withDOM('pitrfl');

    DashboardService.getProducts().success(function(response) {
      vm.products = response.dashboard;
    });

    vm.productsByCity = {
      data: [],
      labels: []
    };
    DashboardService.getProductsByCity().success(function(response){
      for(var key in response){
        vm.productsByCity.labels.push(key);
        vm.productsByCity.data.push(response[key]);
      }
    }).error(function(){
      alert('Error in loading products by city.');
    });


    vm.ordersByCity = {
      data: [[]],
      labels: [],
      series: ['orders'],
      options: {
        scaleBeginAtZero : false,
        barDatasetSpacing : 1
      }
    };

    DashboardService.getOrdersByCity().success(function(response) {
      for(var key in response) {
        vm.ordersByCity.labels.push(key);
        vm.ordersByCity.data[0].push(response[key]);
      }
    }).error(function(){
      alert('Error in loading orders by city.');
    });
  }
})();