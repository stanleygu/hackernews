'use strict';

describe('Service: placeHolder', function () {

  // load the service's module
  beforeEach(module('angularHnApp'));

  // instantiate service
  var placeHolder;
  beforeEach(inject(function (_placeHolder_) {
    placeHolder = _placeHolder_;
  }));

  it('should do something', function () {
    expect(!!placeHolder).toBe(true);
  });

});
