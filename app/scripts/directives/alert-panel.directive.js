'use strict';

(function () {

  angular.module('angularTinySocialApp')
    .directive('alertPanel', alertPanelDirective);


  /**
   * @ngInject
   */
  function alertPanelDirective() {

    return {
      restrict: 'E',
      templateUrl: 'views/directives/alert-panel.html',
      scope: {
        message: '@',
        dismissible: '@'
      }
    };


  }

})();
