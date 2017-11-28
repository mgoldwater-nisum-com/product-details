import {View} from 'backbone.marionette';
import shippingFormTemplate from '../templates/shippingFormTemplate.hbs';
import setModelState from '../helpers/helpers';

const ShippingFormView = View.extend({
  template: shippingFormTemplate,
  events: {
    'submit': setModelState
  },
  
});

export default ShippingFormView;