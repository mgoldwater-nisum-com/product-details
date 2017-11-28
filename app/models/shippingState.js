import {Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';

const ShippingState = Model.extend({
  defaults: {
    fullName: '',
    address: '',
    city: '',
    state: 'Alabama',
    zip: '',
    country: 'United States'
  },
  localStorage: new LocalStorage('ShippingState')
});

const shippingState = new ShippingState();

export default shippingState;