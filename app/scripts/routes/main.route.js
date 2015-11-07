(function () {
  'use strict';

  angular.module('angularTinySocialApp')
    .config(mainRoute);


  /**
   * @ngInject
   */
  function mainRoute($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('/', {
      url: '/',
      controller: 'MainCtrl',
      controllerAs: 'main',
      templateUrl: 'views/main.html'
    });
  }

})();
