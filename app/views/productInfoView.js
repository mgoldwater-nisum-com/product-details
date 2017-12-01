import {View} from 'backbone.marionette';
import productInfoTemplate from '../templates/productInfoTemplate.hbs';

const ProductInfoView = View.extend({
  template: productInfoTemplate,
  modelEvents: {
    'change': 'render'
  }
});

export default ProductInfoView;