import {View} from 'backbone.marionette';
import productFormTemplate from '../templates/productFormTemplate.hbs';
import setModelState from '../helpers/helpers';

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