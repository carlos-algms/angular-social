'use strict';

(function () {

  angular.module('angularTinySocialApp-mock')
    .run(newsFeedMock);



  /**
   * @ngInject
   */
  function newsFeedMock($httpBackend) {

    $httpBackend.whenGET('/api/feed').respond(newsFeedRespond);

    ///////////////////

    function newsFeedRespond() {

      var res = {};
      res.data = _generateItems();

      return [ 200, res, {} ];
    }
  }


  function _generateItems() {
    var items = [];

    for( var i = 0; i <= 10; i++ ) {
      items.push({
        date: new Date().toISOString(),
        text: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação',
        author: {
          name: 'Pessoa'
        }
      });
    }

    return items;
  }

})();
