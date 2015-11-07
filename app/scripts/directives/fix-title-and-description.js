(function (angular, $) {
  'use strict';

  angular.module('angularTinySocialApp')
    .directive('head', fixTitleandDescriptionDirective);


  /**
   * @ngInject
   */
  function fixTitleandDescriptionDirective($compile, pageConfig) {

    return {
      restrict: 'E',
      link: _link
    };

    /////////////


    function _link($scope, $head) {
      $scope.pageConfig = pageConfig;

      fixTitleTag($scope, $head);
      fixDescriptionMetaTag($scope, $head);
    }


    function fixTitleTag($scope, $head) {
      var titleTag = $head.find('title');

      if( ! titleTag.length ) {
        titleTag = $('<title />').prependTo($head);
      }

      titleTag.attr('ng-bind', 'pageConfig.title');
      $compile(titleTag)($scope);
    }


    function fixDescriptionMetaTag($scope, $head) {
      var tag = $head.find('meta[name="description"]');

      if( ! tag.length ) {
        tag = $('<meta name="description" />').prependTo($head);
      }

      tag.attr('content', '{{pageConfig.description}}');
      $compile(tag)($scope);
    }
  }

})(angular, jQuery);
