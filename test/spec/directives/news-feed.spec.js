'use strict';

describe('Directive news-feed:', function () {

  beforeEach( module('angularTinySocialApp') );

  beforeEach(inject(function ($rootScope, $httpBackend, $compile, $templateCache) {
    this.$rootScope = $rootScope;
    this.$httpBackend = $httpBackend;
    this.$compile = $compile;

    $templateCache.put('views/news-feed.html', '');

    this.$rootScope.$apply();
  }));


  afterEach(function () {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });


  it('Should request the feed via $resource and populate $scope', function () {
    var response = { data: [1, 2] };
    this.$httpBackend.expectGET('/api/feed').respond(200, response);

    var $scope = this.$rootScope.$new();
    this.$compile('<news-feed></news-feed>')($scope);
    this.$httpBackend.flush();

    $scope.feeds.length.should.equal(2);
  });


  it('On fail, should set a flag into $scope', function () {
    this.$httpBackend.expectGET('/api/feed').respond(500, {});

    var $scope = this.$rootScope.$new();
    this.$compile('<news-feed></news-feed>')($scope);
    this.$httpBackend.flush();

    $scope.failLoadFeeds.should.equal(true);
  });

});
