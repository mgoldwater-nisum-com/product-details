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
    console.log('the validate function has been initiated');
    console.log('attrs is: ', attrs);
    if (attrs.quantity < 1) {
      return 'You can\'t buy less than 1 of an item';
    }
  }
});

const productState = new ProductState();
productState.on("invalid", function(model){
  // console.log('invalid event is initiated!')
  // console.log('model is: ', model);
  model.set('invalid', true);
});

productState.on("sync", function(model){
  model.set('invalid', false);
});

export default productState;