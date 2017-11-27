import {View} from 'backbone.marionette';
import shippingInfoTemplate from '../templates/shippingInfoTemplate.hbs';

const ShippingInfoView = View.extend({
  template: shippingInfoTemplate
});

export default ShippingInfoView;