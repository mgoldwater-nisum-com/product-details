import {View} from 'backbone.marionette';
import productFormTemplate from '../templates/productFormTemplate.hbs';
import setModelState from '../helpers/setModelState';
import {sizeSelectCollection} from '../collections/selectCollection';
import SelectView from './selectView';

const ProductFormView = View.extend({
  template: productFormTemplate,
  regions: {
    sizeSelect: '#sizeSelect',
    // colorSelect: '#colorSelect'
  },
  events: {
    'submit': 'onSubmit'
  },
  modelEvents: {
    'change': 'render',
    'invalid': 'onInvalid',
    'sync': 'onSync'
  },

  onInvalid: function() {
    this.model.set('invalid', true);
  },

  onRender: function() {
    this.showChildView('sizeSelect', new SelectView({collection: sizeSelectCollection, attributes: {name: 'size'}}));
  },

  onSubmit: function(e) {
    e.preventDefault();
    const selects = {
      size: 'sizeSelect',
      // color: 'colorSelect'
  }
    setModelState.apply(this, [e, selects]);
  },

  onSync: function() {
    this.triggerMethod('submitProduct', this);
    this.model.set('invalid', false);
  }
});

export default ProductFormView;