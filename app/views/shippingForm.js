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
    'change': 'render',
    'sync': 'onSync',
    'invalid': 'onInvalid'
  },

  onInvalid: function(){
    const validationFields = new Set(['fullName', 'address', 'city', 'zip']);
    let validationErrors = this.model.validationError;
    for (let item of validationFields) {
      if (validationErrors.hasOwnProperty(item + 'Valid')) {
        this.model.set(item + 'Valid', false);
      } else {
        this.model.set(item + 'Valid', true);
      }
    }
  },
  onRender: function() {
    $('#country[selected]').attr('selected', false);
    $('#country').val(this.model.get('country')).attr('selected', true);
    $('#state[selected]').attr('selected', false);
    $('#state').val(this.model.get('state')).attr('selected', true);
  },

  onSync: function() {
    $('#displayInfo').show();
  }
});

export default ShippingFormView;