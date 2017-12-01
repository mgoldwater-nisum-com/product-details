import {CollectionView} from 'backbone.marionette';

const StateSelectView = CollectionView.extend({
  tagName: 'select',
  className: 'shippingSelect',
  attributes: {
    name: 'state'
  }
})

export default StateSelectView;