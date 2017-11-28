import {View} from 'backbone.marionette';
import productFormTemplate from '../templates/productFormTemplate.hbs';
import setModelState from '../helpers/setModelState';

const ProductFormView = View.extend({
  template: productFormTemplate,
  events: {
    'submit': setModelState
  },
  modelEvents: {
    'change': 'render'
  }
});

export default ProductFormView;