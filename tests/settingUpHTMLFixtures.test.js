jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
loadFixtures('myfixture.html');
describe('testing out jasmine-jquery', function(){
  it('can find an element in the dom using jasmine-jquery', function(){
    expect($j('#my-fixture')).toBeInDOM();
  })
})

