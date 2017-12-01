import {Model} from 'backbone';

const SectionState = Model.extend({
  defaults: {
    hiddenProductForm: 'hidden'
  }
});

const sectionState = new SectionState();

export default sectionState;