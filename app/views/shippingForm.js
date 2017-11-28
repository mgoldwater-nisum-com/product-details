import {View} from 'backbone.marionette';
import shippingFormTemplate from '../templates/shippingFormTemplate.hbs';

const ShippingFormView = View.extend({
  template: shippingFormTemplate,
  events: {
    'submit': 'setShippingState'
  },
  setShippingState: function(e){
    e.preventDefault();
    const arrOfData = this.$el.serializeArray();
    const formattedData = arrOfData.reduce( (dataToChange, currData) => {
      dataToChange[currData.name] = currData.value;
      return dataToChange;
    }, {});
    this.model.save(formattedData);
  }
});

export default ShippingFormView;