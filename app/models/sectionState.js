import {Model} from 'backbone';

const SectionState = Model.extend({
  defaults: {
    productFormHidden: 'hidden',
    displayInfoHidden: 'hidden'
  }
});

const sectionState = new SectionState();

export default sectionState;