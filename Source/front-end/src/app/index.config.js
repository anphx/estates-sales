(function() {
  'use strict';

  angular
    .module('gulpGenerator')
    .config(['uiGmapGoogleMapApiProvider', config]);

  /** @ngInject */
  function config(uiGmapGoogleMapApiProvider) {
    // Enable log
    // $logProvider.debugEnabled(true);

    // // Set options third-party lib
    // toastrConfig.allowHtml = true;
    // toastrConfig.timeOut = 3000;
    // toastrConfig.positionClass = 'toast-top-right';
    // toastrConfig.preventDuplicates = true;
    // toastrConfig.progressBar = true;

    // config google map
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAX0w9aA8rm7NZfI4EEWeiZG0RRnO_3X-A',
      v: '3.22', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  }

})();
