(function (angular, $) {
  'use strict';

  angular.module('angularTinySocialApp')
    .run(fixTitleandDescriptionRun);


  /**
   * @ngInject
   */
  function fixTitleandDescriptionRun($rootScope, $compile, pageConfig) {
    var head = $('head');

    $rootScope.pageConfig = pageConfig;

    fixTitleTag();
    fixDescriptionMetaTag();


    ////////////////////


    function fixTitleTag() {
      var titleTag = head.find('title');

      if( ! titleTag.length ) {
        titleTag = $('<title />').prependTo(head);
      }

      titleTag.attr('ng-bind', 'pageConfig.title');
      $compile(titleTag)($rootScope);
    }


    function fixDescriptionMetaTag() {
      var tag = head.find('meta[name="description"]');

      if( ! tag.length ) {
        tag = $('<meta name="description" />').prependTo(head);
      }

      tag.attr('content', '{{pageConfig.description}}');
      $compile(tag)($rootScope);
    }
  }

})(angular, jQuery);
