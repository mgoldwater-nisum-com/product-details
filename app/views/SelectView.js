import {View} from 'backbone.marionette';
import SelectTemplate from '../templates/selectTemplate.hbs';

const SelectView = View.extend({
  tagName: 'select',
  template: SelectTemplate
})

export default SelectView;