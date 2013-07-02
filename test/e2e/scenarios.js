'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /habitList when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/habitList");
  });


  describe('habitList', function() {

    beforeEach(function() {
      browser().navigateTo('#/habitList');
    });

    it('should render a title', function() {
      expect(element('h1').text()).
        toMatch(/banner/);
    });

    it('should render the list of habits when user navigates to /habitList', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 1/);
    });

  });


  describe('habitDetail', function() {

    beforeEach(function() {
      browser().navigateTo('#/habitDetail');
    });


    it('should render habitDetail when user navigates to /habitDetail', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/detail/);
    });

  });
});
