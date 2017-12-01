import {Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';
import stateData from '../helpers/determineSelectedState';
// console.log('stateData is: ', stateData);
export const ShippingState = Model.extend({
  defaults: {
    fullName: '',
    fullNameValid: true,
    address: '',
    addressValid: true, 
    city: '',
    cityValid: true,
    state: '',
    zip: '',
    zipValid: true,
    country: '',
    stateOptions: stateData
  },
  localStorage: new LocalStorage('ShippingState'),
  validate: function(attrs) {
    const errors = {};
    for (let key in attrs) {
      this.set(key, attrs[key]);
      if ((key === 'fullName' || key === 'city' || key === 'address') && !attrs[key].length) { 
        errors[key + 'Valid'] = true;
      }
      if (key === 'zip' && (attrs[key].length !== 5 || attrs[key].length === 5 &&  /[^0-9]/gi.test(attrs[key]))) {
        errors[key + 'Valid'] = true;
      }
    }
    if (Object.keys(errors).length !== 0) {
      return errors;
    }
  }
});

const shippingState = new ShippingState();

export default shippingState;