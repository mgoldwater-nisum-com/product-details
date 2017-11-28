import {View} from 'backbone.marionette';
import sectionTemplate from '../templates/sectionTemplate.hbs';
import ProductFormView from './productForm';
import ShippingFormView from './shippingForm';
import ProductInfoView from './productInfo';
import ShippingInfoView from './shippingInfo';
import productState from '../models/productState';
import shippingState from '../models/shippingState';

const SectionView = View.extend({
  template: sectionTemplate,

  regions: {
    productForm: '#productForm',
    shippingForm: '#shippingForm',
    productInfo: '#displayProductInfo',
    shippingInfo: '#displayShippingInfo',
  },

  onRender() {
    this.showChildView('productForm', new ProductFormView({model: productState, el: this.$('#productForm')}));
    this.showChildView('shippingForm', new ShippingFormView({model: shippingState}));
    this.showChildView('productInfo', new ProductInfoView({model: productState}));
    this.showChildView('shippingInfo', new ShippingInfoView({model: shippingState}));
  }
});

export default SectionView;