'use strict';

describe('Service: hackerNewsData', function () {

  // load the service's module
  beforeEach(module('angularHnApp'));

  // instantiate service
  var hackerNewsData;
  beforeEach(inject(function (_hackerNewsData_) {
    hackerNewsData = _hackerNewsData_;
  }));

  it('should do something', function () {
    expect(!!hackerNewsData).toBe(true);
  });

});
