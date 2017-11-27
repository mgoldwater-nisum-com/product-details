import {View} from 'backbone.marionette';
import sectionTemplate from '../templates/sectionTemplate.hbs';
import ProductFormView from './productForm';
import ShippingFormView from './shippingForm';

const SectionView = View.extend({
  template: sectionTemplate,

  regions: {
    productForm: '#productForm',
    shippingForm: '#shippingForm'
  },

  onRender() {
    this.showChildView('productForm', new ProductFormView());
    this.showChildView('shippingForm', new ShippingFormView());
  }
});

export default SectionView;