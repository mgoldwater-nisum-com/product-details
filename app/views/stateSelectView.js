import {View} from 'backbone.marionette';
import StateSelectTemplate from '../templates/stateSelectTemplate.hbs';

const StateSelectView = View.extend({
  tagName: 'select',
  className: 'shippingSelect',
  attributes: {
    name: 'state'
  },
  template: StateSelectTemplate
})

export default StateSelectView;