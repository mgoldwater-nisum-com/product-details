import rootTemplate from './rootTemplate.hbs';
import sectionTemplate from './sectionTemplate.hbs';

// jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
jasmine.getFixtures().fixturesPath = 'base/app/templates/';

describe('section view UI tests', function(){

  // beforeEach(function(){
  // })

  it('should load the Handlebars templates', function(){
    // $('body').append(Handlebars.templates[rootTemplate]);
    // $('#section-hook').append(Handlebars.templates[sectionTemplate]);
    // expect($j('.title')).toBeInDOM();
    // expect($j('#section-hook')).toBeInDOM();
    // Handlebars.compile('rootTemplate');
    loadFixtures(rootTemplate);
  });

})