import {Model} from 'backbone';

const ShippingState = Model.extend({
  defaults: {
    fullName: '',
    address: '',
    city: '',
    state: 'Alabama',
    zip: '',
    country: 'United States'
  }
});

const shippingState = new ShippingState();

export default shippingState;