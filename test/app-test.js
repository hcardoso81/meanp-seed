'use strict';
/*test non conflict*/
angular.module('meanp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'http-auth-interceptor',
  'ui.bootstrap'
])
  .config(function ( $locationProvider) {
    $locationProvider.html5Mode(true);
  })