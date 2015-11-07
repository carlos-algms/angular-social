(function () {
  'use strict';


  angular.module('angularTinySocialApp')
    .controller('MainCtrl', MainCtrl);


  ////////////////


  /**
   * @ngInject
   */
  function MainCtrl(pageConfig) {

    pageConfig.setTitle('Página inicial');
    pageConfig.setDescription('Bem vindo a Angular tiny social network');

  }

})();

