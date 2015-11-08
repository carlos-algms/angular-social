'use strict';

(function () {

  angular.module('angularTinySocialApp-mock')
    .run(updateStatusMock);



  /**
   * @ngInject
   */
  function updateStatusMock($httpBackend) {

    $httpBackend.whenPOST('/api/status').respond(updateStatusPostRespond);


    ///////////////////


    function updateStatusPostRespond(method, url, post) {

      var res = JSON.parse(post);

      res.date = (new Date()).toISOString();

      res.author = {
        name: 'Eu'
      };


      return [ 200, res, {} ];
    }
  }

})();
