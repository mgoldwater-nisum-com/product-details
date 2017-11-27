import {Model} from 'backbone';

const ProductState = Model.extend({
  defaults: {
    size: 'Small',
    color: 'Black',
    quantity: 1
  }
});

const productState = new ProductState();

export default productState;