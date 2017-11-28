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
    'change': 'render'
  },
  onRender: function(){
    $('#size[selected]').attr('selected', false);
    $('#size').val(this.model.get('size')).attr('selected', true);
    $('#color[selected]').attr('selected', false);
    $('#color').val(this.model.get('color')).attr('selected', true);
  }
});

export default ProductFormView;