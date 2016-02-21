(function() {
  'use strict';

  angular
    .module('gulpGenerator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
