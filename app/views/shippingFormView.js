import {View} from 'backbone.marionette';
import shippingFormTemplate from '../templates/shippingFormTemplate.hbs';
import setModelState from '../helpers/setModelState';
import StateSelectView from './stateSelectView';
import stateSelectCollection from '../collections/stateSelectCollection';
console.log('stateSelectCollection is: ', stateSelectCollection)

const ShippingFormView = View.extend({
  template: shippingFormTemplate,

  regions: {
    stateSelect: '#stateSelect',
    // countrySelect: '#countrySelect'
  },

  events: {
    'submit': setModelState
  },
  modelEvents: {
    'change': 'render',
    'sync': 'onSync',
    'invalid': 'onInvalid'
  },

  onInvalid: function() {
    const validationFields = new Set(['fullName', 'address', 'city', 'zip']);
    let validationErrors = this.model.validationError;
    for (let item of validationFields) {
      if (validationErrors && validationErrors.hasOwnProperty(item + 'Valid')) {
        this.model.set(item + 'Valid', false);
      } else {
        this.model.set(item + 'Valid', true);
      }
    }
  },
  onRender: function() {
    this.showChildView('stateSelect', new StateSelectView({collection: stateSelectCollection}));
  },

  onSync: function() {
    this.triggerMethod('submitDisplay', this);
    this.onInvalid();
  }
});

export default ShippingFormView;