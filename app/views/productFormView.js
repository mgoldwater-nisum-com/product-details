import {View} from 'backbone.marionette';
import productFormTemplate from '../templates/productFormTemplate.hbs';
import setModelState from '../helpers/setModelState';
import $ from 'jquery';

const ProductFormView = View.extend({
  template: productFormTemplate,
  events: {
    'submit': setModelState
  },
  modelEvents: {
    'change': 'render',
    'invalid': 'onInvalid',
    'sync': 'onSync'
  },

  onInvalid: function() {
    this.model.set('invalid', true);
  },

  onRender: function(){
    $('#size[selected]').attr('selected', false);
    $('#size').val(this.model.get('size')).attr('selected', true);
    $('#color[selected]').attr('selected', false);
    $('#color').val(this.model.get('color')).attr('selected', true);
  },

  onSync: function() {
    this.triggerMethod('submit', this);
    this.model.set('invalid', false);
  }
});

export default ProductFormView;