'use strict';

(function () {

  angular.module('angularTinySocialApp')
    .directive('newsFeed', newsFeedDirective);


  /**
   * @ngInject
   */
  function newsFeedDirective($resource) {

    return {
      restrict: 'E',
      templateUrl: 'views/news-feed.html',
      link: _link
    };


    ////////////////////////


    function _link($scope) {
      $scope.feeds = [];

      $resource('/api/feed').get().$promise
        .then(_updateFeeds)
        .catch(_notifyUser);

      ///////////////////////////////////

      function _updateFeeds(res) {
        $scope.feeds = res.data || [];
      }

      function _notifyUser() {
        $scope.failLoadFeeds = true;
      }
    }

  }

})();
