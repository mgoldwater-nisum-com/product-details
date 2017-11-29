import {Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';

const ShippingState = Model.extend({
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
    country: ''
  },
  localStorage: new LocalStorage('ShippingState'),
  validate: function(attrs) {
    const errors = {};
    for (let key in attrs) {
      this.set(key, attrs[key]);
      if ((key === 'fullName' || key === 'city') && !attrs[key].length && !/[^a-z]/gi.test(attrs[key])) { 
        errors[key + 'Valid'] = true;
      }
      if (key === 'address' && !attrs[key].length) {
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

shippingState.on("invalid", function(model){
  const validationFields = new Set(['fullName', 'address', 'city', 'zip']);
  let validationErrors = model.validationError;
  for (let item of validationFields) {
    if (validationErrors.hasOwnProperty(item + 'Valid')) {
      model.set(item + 'Valid', false);
    } else {
      model.set(item + 'Valid', true);
    }
  }
});

export default shippingState;