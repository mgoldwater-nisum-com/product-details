import {View} from 'backbone.marionette';
import sectionTemplate from '../templates/sectionTemplate.hbs';
import ProductFormView from './productForm';
import ShippingFormView from './shippingForm';
import ProductInfoView from './productInfo';
import ShippingInfoView from './shippingInfo';

const SectionView = View.extend({
  template: sectionTemplate,

  regions: {
    productForm: '#productForm',
    shippingForm: '#shippingForm',
    productInfo: '#displayProductInfo',
    shippingInfo: '#displayShippingInfo',
  },

  onRender() {
    this.showChildView('productForm', new ProductFormView());
    this.showChildView('shippingForm', new ShippingFormView());
    this.showChildView('productInfo', new ProductInfoView());
    this.showChildView('shippingInfo', new ShippingInfoView());
  }
});

export default SectionView;