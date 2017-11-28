import {View} from 'backbone.marionette';
import productFormTemplate from '../templates/productFormTemplate.hbs';

const ProductFormView = View.extend({
  template: productFormTemplate,
  events: {
    'submit': 'setProductState'
  },
  setProductState: function(e){
    e.preventDefault();
    const arrOfData = this.$el.serializeArray();
    const formattedData = arrOfData.reduce( (dataToChange, currData) => {
      dataToChange[currData.name] = currData.value;
      return dataToChange;
    }, {});
    this.model.save(formattedData);
  }
});

export default ProductFormView;