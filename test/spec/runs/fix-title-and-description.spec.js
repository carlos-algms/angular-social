'use strict';

describe('Service pageConfig:', function () {

  beforeEach( module('angularTinySocialApp') );

  beforeEach(inject(function (pageConfig, $rootScope, $rootElement) {
    this.pageConfig = pageConfig;
    this.$rootScope = $rootScope;
    this.$rootScope.$apply();
  }));

  it('pageConfig.setTitle() should change the current page title', function () {
    var title = 'Home';
    this.pageConfig.setTitle(title);

    this.$rootScope.$apply();

    this.pageConfig.title.should.equal(title);
    $("head title").html().should.equal(title);
  });

  it('pageConfig.setDescription() should change the current page meta description', function () {
    var description = 'my description';

    this.pageConfig.setDescription(description);
    this.$rootScope.$apply();

    this.pageConfig.description.should.equal(description);
    $('head meta[name="description"]').attr('content').should.equal(description);
  });

});
