(function() {
    'use strict';
    angular.module('gulpGenerator').controller('DashboardController', ['EstateService', DashboardController]);
    /** @ngInject */
    function DashboardController(estateService) {
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

        estateService.getEstates(function(data, error){
            if(error != null) {
                alert(error.message);
                return;
            }
            vm.data = data;
        });
    }
})();