import {View} from 'backbone.marionette';
import shippingFormTemplate from '../templates/shippingFormTemplate.hbs';

const ShippingFormView = View.extend({
  template: shippingFormTemplate
});

export default ShippingFormView;