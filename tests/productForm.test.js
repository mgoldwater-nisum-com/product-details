import {ProductState} from '../app/models/productState';

const testProductState = new ProductState();

describe('productForm tests', function() {
  it('does not validate when the quantity is less than 1', function() {
    testProductState.set('quantity', -2);
    expect(testProductState.validate(testProductState.attributes)).toBe('You can\'t buy less than 1 of an item');
    testProductState.set('quantity', 'p');
    expect(testProductState.validate(testProductState.attributes)).toBe('You can\'t buy less than 1 of an item');
  });

  it('does validate when the quantity is greater than or equal to 1 and shows the shipping address', function() {
    testProductState.set('quantity', 2);
    expect(testProductState.validate(testProductState.attributes)).toBe(undefined);
  });
});