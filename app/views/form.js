import {View} from 'backbone.marionette';
import formTemplate from '../templates/formTemplate.hbs';

const FormView = View.extend({
  template: formTemplate,

});

export default FormView;