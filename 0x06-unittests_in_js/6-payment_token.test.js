const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with correct data when success is true', function(done) {
    const result = getPaymentTokenFromAPI(true);
    
    result.then(data => {
      expect(data).to.eql({data: 'Successful response from the API'});
      done();  // This ensures the test waits for the promise to resolve.
    }).catch(err => done(err)); // In case of error, we pass it to done to fail the test.
  });
});
