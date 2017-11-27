import {View} from 'backbone.marionette';
import productFormTemplate from '../templates/productFormTemplate.hbs';

const ProductFormView = View.extend({
  template: productFormTemplate
});

export default ProductFormView;