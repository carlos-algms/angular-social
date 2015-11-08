(function () {
  'use strict';

  angular.module('angularTinySocialApp')
    .config(firendsRoute);


  /**
   * @ngInject
   */
  function firendsRoute($stateProvider) {

    $stateProvider.state('friends', {
      url: '/friends',
      controller: 'FriendsCtrl',
      controllerAs: 'friends',
      templateUrl: 'views/friends.html'
    });
  }

})();
