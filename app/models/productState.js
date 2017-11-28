import {Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';

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
productState.on("invalid", function(model){
  model.set('invalid', true);
});

productState.on("sync", function(model){
  model.set('invalid', false);
});

export default productState;