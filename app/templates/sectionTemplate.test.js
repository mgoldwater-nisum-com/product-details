jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';

it('should load the Handlebars templates', function(){
  loadFixtures('myfixture.hbs');  
});