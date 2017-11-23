import {View} from 'backbone.marionette';
import sectionTemplate from '../templates/sectionTemplate.hbs';

const SectionView = View.extend({
  template: sectionTemplate,

  regions: {
    form: '#form'
  }
});

export default SectionView;