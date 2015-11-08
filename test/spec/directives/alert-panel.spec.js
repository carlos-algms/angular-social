'use strict';

describe('Directive alert-panel:', function () {

  beforeEach( module('angularTinySocialApp') );

  beforeEach(inject(function ($rootScope, $compile) {
    this.$scope = $rootScope.$new();
    this.$compile = $compile;
  }));


  it('Use attr to fill the readable message', function () {
    var element = this.$compile('<alert-panel data-message="Test message" />')(this.$scope);
    this.$scope.$apply();

    element.find('span').html().should.equal('Test message');
    element.find('button').length.should.equal(1);
  });


  it('Does not show dismiss button', function () {
    var element = this.$compile('<alert-panel data-message="Test message" data-dismissible="false" />')(this.$scope);
    this.$scope.$apply();

    element.find('button').length.should.equal(0);
  });

});
