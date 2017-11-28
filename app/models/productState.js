import {Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';

const ProductState = Model.extend({
  defaults: {
    size: 'Small',
    color: 'Black',
    quantity: 1
  },
  localStorage: new LocalStorage('ProductState'),
});

const productState = new ProductState();

export default productState;