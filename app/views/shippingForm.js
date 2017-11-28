import {View} from 'backbone.marionette';
import shippingFormTemplate from '../templates/shippingFormTemplate.hbs';
import setModelState from '../helpers/setModelState';
import $ from 'jquery';

const ShippingFormView = View.extend({
  template: shippingFormTemplate,
  events: {
    'submit': setModelState
  },
  modelEvents: {
    'change': 'render'
  },
  onRender: function() {
    $('#country[selected]').attr('selected', false);
    $('#country').val(this.model.get('country')).attr('selected', true);
    $('#state[selected]').attr('selected', false);
    $('#state').val(this.model.get('state')).attr('selected', true);
  }
});

export default ShippingFormView;