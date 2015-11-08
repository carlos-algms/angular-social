'use strict';

(function () {

  angular.module('angularTinySocialApp')
    .directive('newsFeed', newsFeedDirective);


  /**
   * @ngInject
   */
  function newsFeedDirective($resource, $rootScope) {

    return {
      restrict: 'E',
      templateUrl: 'views/news-feed.html',
      link: _link
    };


    ////////////////////////


    function _link($scope) {
      $scope.feeds = [];

      _addEventsToFillFeedList($scope);
      _requestFeeds($scope);
    }


    function _addEventsToFillFeedList($scope) {
      $scope.$on('newsFeed-top', _insertFeedsOnTop);
      $scope.$on('newsFeed-bottom', _insertFeedsAtBottom);

      ////////////////////


    }


    function _insertFeedsOnTop(event, data) {
      event.stopPropagation();
      Array.prototype.unshift.apply(event.currentScope.feeds, data);
    }

    function _insertFeedsAtBottom(event, data) {
      event.stopPropagation();
      Array.prototype.push.apply(event.currentScope.feeds, data);
    }



    function _requestFeeds($scope) {
      $resource('/api/feed').get().$promise
        .then(_updateFeeds)
        .catch(_notifyUser);

      ///////////////////////

      function _updateFeeds(res) {
        $scope.$emit('newsFeed-bottom', res.data || []);
      }

      function _notifyUser() {
        $scope.failLoadFeeds = true;
      }
    }

  }

})();
