import {ShippingState} from './shippingState';

const testShippingState = new ShippingState();

describe('shippingForm tests', function(){
  it('does not validate when the full name category is empty', function() {
    expect(testShippingState.validate(testShippingState.attributes)).toHaveMember('fullNameValid');
  });
  
  it('does not validate when the address category is empty', function() {
    expect(testShippingState.validate(testShippingState.attributes)).toHaveMember('addressValid');
  });

  it('does not validate when the city category is empty', function() {
    expect(testShippingState.validate(testShippingState.attributes)).toHaveMember('cityValid');
  });

  it('does not validate when the zip code category is not 5 numeric characters', function() {
    expect(testShippingState.validate(testShippingState.attributes)).toHaveMember('zipValid');
    testShippingState.set('zip', '1234a')
    expect(testShippingState.validate(testShippingState.attributes)).toHaveMember('zipValid');
  });

  it('validates when the form info is entered correctly and shows the summary info', function() {
    testShippingState.set('fullName', 'Al Allen');
    testShippingState.set('address', '20 Foo St.');
    testShippingState.set('city', 'Hoboken');
    testShippingState.set('zip', '90210');
    expect(testShippingState.validate(testShippingState.attributes)).toBeUndefined();
  });
})