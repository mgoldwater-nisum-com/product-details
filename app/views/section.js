import {View} from 'backbone.marionette';
import sectionTemplate from '../templates/sectionTemplate.hbs';
import ProductFormView from './productForm';
import ShippingFormView from './shippingForm';
import ProductInfoView from './productInfo';
import ShippingInfoView from './shippingInfo';
import state from '../models/state';

const SectionView = View.extend({
  template: sectionTemplate,

  events: {
    'click #productButton': function(e){
      console.log('productButton is clicked');
      e.preventDefault();
    },
    'click #shippingButton': function(e){
      console.log('shippingButton is clicked');
      e.preventDefault();
    }
  },

  regions: {
    productForm: '#productForm',
    shippingForm: '#shippingForm',
    productInfo: '#displayProductInfo',
    shippingInfo: '#displayShippingInfo',
  },

  onRender() {
    this.showChildView('productForm', new ProductFormView());
    this.showChildView('shippingForm', new ShippingFormView());
    this.showChildView('productInfo', new ProductInfoView({model: state}));
    this.showChildView('shippingInfo', new ShippingInfoView());
  }
});

export default SectionView;