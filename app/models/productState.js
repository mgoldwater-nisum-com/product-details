import {Model} from 'backbone';

const ProductState = Model.extend({
  defaults: {
    size: 'Small',
    color: 'Black',
    quantity: 1,
    fullName: '',
    address: '',
    city: '',
    state: 'Alabama',
    zip: '',
    country: 'United States'
  }
});

const productState = new ProductState();

export default productState;