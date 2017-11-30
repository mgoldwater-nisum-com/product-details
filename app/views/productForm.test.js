import {ProductState} from '../models/productState';
import ProductFormView from './productForm';
import setModelState from '../helpers/setModelState';

describe('Product Form View events', function() {

  it('sets the model state to false when the form is invalid', function(){
    const productFormView = new ProductFormView({model: new ProductState()});
    productFormView.model.set('invalid', false);
    productFormView.trigger('invalid');
    expect(productFormView.model.get('invalid')).toBe(false);
  })

})