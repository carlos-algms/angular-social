'use strict';

(function () {

  angular.module('angularTinySocialApp-mock')
    .run(friendsMock);



  /**
   * @ngInject
   */
  function friendsMock($httpBackend) {

    $httpBackend.whenGET('/api/friends').respond(friendsRespond);


    ///////////////////


    function friendsRespond() {

      var res = {};

      res.data = [
        {
          name: 'João da Silva',
          picture: 'http://lorempixel.com/output/people-q-c-100-100-1.jpg'
        },
        {
          name: 'Raymond Carter',
          picture: 'http://lorempixel.com/output/people-q-c-100-100-2.jpg'
        },
        {
          name: 'Bruce Russell',
          picture: 'http://lorempixel.com/output/people-q-c-100-100-3.jpg'
        },
        {
          name: 'Sharon Jones',
          picture: 'http://lorempixel.com/output/people-q-c-100-100-4.jpg'
        },
        {
          name: 'Joshua Howard',
          picture: 'http://lorempixel.com/output/people-q-c-100-100-5.jpg'
        },
        {
          name: 'Diane Hernandez',
          picture: 'http://lorempixel.com/output/people-q-c-100-100-6.jpg'
        },
        {
          name: 'Maria Fernanda',
          picture: 'http://lorempixel.com/output/people-q-c-100-100-7.jpg'
        }
      ];

      return [ 200, res, {} ];
    }
  }

})();
