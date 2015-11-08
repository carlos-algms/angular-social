'use strict';

describe('Directive news-feed:', function () {

  beforeEach( module('angularTinySocialApp') );

  beforeEach(inject(function ($rootScope, $httpBackend, $compile) {
    this.$scope = $rootScope.$new();
    this.$compile = $compile;

    this.$httpBackend = $httpBackend;
    this.requestHandler = this.$httpBackend.expectGET('/api/feed').respond(200, {});
  }));


  afterEach(function () {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });


  it('Attach events on $scope to hadle insertions of new items', function () {
    this.$compile('<news-feed></news-feed>')(this.$scope);
    this.$httpBackend.flush();

    this.$scope.$$listenerCount['newsFeed-top'].should.equal(1);
    this.$scope.$$listenerCount['newsFeed-bottom'].should.equal(1);
  });


  it('Should request the feed via $resource and populate $scope', function () {
    var response = { data: [1, 2] };
    this.requestHandler.respond(200, response);

    var spy = jasmine.createSpy('newsFeed-bottom');
    this.$scope.$on('newsFeed-bottom', spy);

    this.$compile('<news-feed></news-feed>')(this.$scope);
    this.$httpBackend.flush();

    expect(spy).toHaveBeenCalled();
    this.$scope.feeds.length.should.equal(2);
  });


  it('On fail, should set a flag into $scope', function () {
    this.requestHandler.respond(500, {});

    this.$compile('<news-feed></news-feed>')(this.$scope);
    this.$httpBackend.flush();

    this.$scope.failLoadFeeds.should.equal(true);
  });

});
