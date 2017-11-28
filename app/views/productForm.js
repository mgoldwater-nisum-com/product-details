import {View} from 'backbone.marionette';
import productFormTemplate from '../templates/productFormTemplate.hbs';

const ProductFormView = View.extend({
  template: productFormTemplate,
  events: {
    'submit': 'setProductState'
  },
  setProductState: function(e){
    e.preventDefault();
    const arr = this.$el.serializeArray();
    console.log(arr);
    const data = arr.reduce( (dataToChange, currData) => {
      console.log('currData is: ', currData);
      dataToChange[currData.name] = currData.value;
      return dataToChange;
    }, {});
    console.log(data);
    this.model.save(data);
    // console.log(this.model);
  }
});

export default ProductFormView;