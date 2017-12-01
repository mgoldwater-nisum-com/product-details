import {Model} from 'backbone';

const SectionState = Model.extend({
  defaults: {
    hiddenProductForm: 'hidden',
    hiddenDisplayInfo: 'hidden'
  }
});

const sectionState = new SectionState();

export default sectionState;