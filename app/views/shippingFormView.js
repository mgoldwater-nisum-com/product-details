import {View} from 'backbone.marionette';
import shippingFormTemplate from '../templates/shippingFormTemplate.hbs';
import setModelState from '../helpers/setModelState';
import SelectView from './selectView';
import {stateSelectCollection} from '../collections/selectCollection';

const ShippingFormView = View.extend({
  template: shippingFormTemplate,

  regions: {
    stateSelect: '#stateSelect'
  },

  events: {
    'submit': 'onSubmit'
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
    this.showChildView('stateSelect', new SelectView({collection: stateSelectCollection, className: 'shippingSelect', attributes: {name: 'state'}}));
  },

  onSubmit: function(e) {
    e.preventDefault();
    const selects = {state: 'stateSelect'}
    setModelState.apply(this, [e, selects]);
  },

  onSync: function() {
    this.triggerMethod('submitDisplay', this);
    this.onInvalid();
  }
});

export default ShippingFormView;