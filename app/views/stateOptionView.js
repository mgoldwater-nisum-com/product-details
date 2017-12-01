import {View} from 'backbone.marionette';
import StateOptionTemplate from '../templates/stateOptionTemplate.hbs';

console.log('this stateOption view file is run');

const StateOptionView = View.extend({
  // tagName: 'option',
  template: StateOptionTemplate
})

export default StateOptionView;