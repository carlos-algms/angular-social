'use strict';

(function () {

  angular.module('angularTinySocialApp-mock')
    .run(viewsMock);



  /**
   * @ngInject
   */
  function viewsMock($httpBackend) {
    $httpBackend.whenGET(/views\/.*/).passThrough();
  }

})();
