'use strict';

describe('Controller Friends: ', function () {

  beforeEach( module('angularTinySocialApp') );

  beforeEach(inject(function ($rootScope, $httpBackend, $controller) {
    this.$httpBackend = $httpBackend;
    this.requestHandler = $httpBackend.expectGET('/api/friends');
    this.friendsCtrl = $controller('FriendsCtrl', { $scope: $rootScope.$new() });
  }));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  it('Request the friends list on load and expose the records', function () {
    var response = { data: [1, 2] };
    this.requestHandler.respond(200, response);

    this.friendsCtrl.friends.length.should.equal(0);

    this.$httpBackend.flush();
    this.friendsCtrl.friends.length.should.equal( response.data.length );
  });


  it('Set a flag to alert the user on fail', function () {
    this.requestHandler.respond(500, '');

    this.$httpBackend.flush();

    this.friendsCtrl.friends.length.should.equal(0);
    this.friendsCtrl.failRequestFriends.should.equal(true);
  });

});
