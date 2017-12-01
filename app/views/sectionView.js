import {View} from 'backbone.marionette';
import sectionTemplate from '../templates/sectionTemplate.hbs';
import ProductFormView from './productFormView';
import ShippingFormView from './shippingFormView';
import ProductInfoView from './productInfoView';
import ShippingInfoView from './shippingInfoView';
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

  modelEvents: {
    change: 'render'
  },

  onChildviewSubmit: function(){
    this.model.set('hiddenProductForm', '');
  },

  onRender() {
    this.showChildView('productForm', new ProductFormView({model: productState, el: this.$('#productForm')}));
    this.showChildView('shippingForm', new ShippingFormView({model: shippingState, el: this.$('#shippingForm')}));
    this.showChildView('productInfo', new ProductInfoView({model: productState}));
    this.showChildView('shippingInfo', new ShippingInfoView({model: shippingState}));
  }
});

export default SectionView;