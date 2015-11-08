'use strict';
(function () {

  angular.module('angularTinySocialApp')
    .controller('FriendsCtrl', FriendsCtrl);


  /**
   * @ngInject
   */
  function FriendsCtrl($resource, pageConfig) {

    pageConfig.setTitle('Lista de amigos');
    pageConfig.setDescription('Confira a lista de todos os amigos da rede social');

    this.friends = [];
    this.failRequestFriends = false;

    _requestFriends();


    ///////////////////////////


    var vm = this;

    function _requestFriends() {
      $resource('/api/friends').get().$promise
        .then(_exposeRecords)
        .catch(_alertUser);
    }

    function _exposeRecords(res) {
      vm.friends = res.data;
    }

    function _alertUser() {
      vm.failRequestFriends = true;
    }

  }

})();
