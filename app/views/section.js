import {View} from 'backbone.marionette';
import sectionTemplate from '../templates/sectionTemplate.hbs';
import FormView from './form';

const SectionView = View.extend({
  template: sectionTemplate,

  regions: {
    form: '#form-hook'
  },

  onRender() {
    this.showChildView('form', new FormView())
  }
});

export default SectionView;