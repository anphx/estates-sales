/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gulpGenerator')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('appConfig', {
      apiBaseUri: 'http://localhost:1337/localhost:3000/api/',
      userRole: {
        admin: 1,
        agent: 2,
        customer: 3
      }
    });

})();
