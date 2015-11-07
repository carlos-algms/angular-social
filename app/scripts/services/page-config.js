(function () {
  'use strict';

  angular.module('angularTinySocialApp')
    .factory('pageConfig', pageConfigService);


  /**
   * @ngInject
   */
  function pageConfigService() {

    _extendPageConfigs();

    return new PageConfig();


    //////////////


    function PageConfig() {
      this.title = '';
      this.description = '';
    }


    function _extendPageConfigs() {

      PageConfig.prototype.setTitle = function (title) {
        this.title = title;
      };

      PageConfig.prototype.setDescription = function (description) {
        this.description = description;
      };

    }
  }

})();
