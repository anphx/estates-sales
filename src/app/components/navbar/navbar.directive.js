(function() {
    'use strict';
    angular.module('gulpGenerator').directive('acmeNavbar', acmeNavbar);
    /** @ngInject */
    function acmeNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
        /** @ngInject */
        function NavbarController($uibModal) {
            var vm = this;
            // "vm.creation" is avaible by directive option "bindToController: true"
            // vm.relativeDate = moment(vm.creationDate).fromNow();
            // 
            vm.open = function() {
                console.log('click login');

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                    
                });

                modalInstance.result.then(function(selectedItem) {
                    // $scope.selected = selectedItem;
                }, function() {
                    // $log.info('Modal dismissed at: ' + new Date());
                });
            }
        }
    }
})();