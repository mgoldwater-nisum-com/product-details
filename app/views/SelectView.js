import {View} from 'backbone.marionette';
import StateSelectTemplate from '../templates/stateSelectTemplate.hbs';

const SelectView = View.extend({
  tagName: 'select',
  template: StateSelectTemplate
})

export default SelectView;