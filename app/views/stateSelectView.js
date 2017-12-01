import {CollectionView} from 'backbone.marionette';
import StateOptionView from './stateOptionView';

const StateSelectView = CollectionView.extend({
  tagName: 'select',
  className: 'shippingSelect',
  attributes: {
    name: 'state'
  },
  childView: StateOptionView
})

export default StateSelectView;