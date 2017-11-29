import {Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';
import $ from 'jquery';

const ProductState = Model.extend({
  defaults: {
    size: 'Small',
    color: 'Black',
    quantity: 1,
    invalid: false
  },
  localStorage: new LocalStorage('ProductState'),
  validate: function(attrs) {
    if (attrs.quantity < 1) {
      this.set('quantity', attrs.quantity);
      return 'You can\'t buy less than 1 of an item';
    }
  }
});

const productState = new ProductState();

export default productState;