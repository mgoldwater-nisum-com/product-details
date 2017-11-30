import rootTemplate from '../app/templates/rootTemplate.hbs';

jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';

describe('testing out jasmine-jquery', function(){
  it('can find an element in the dom using jasmine-jquery', function(){
    loadFixtures('myfixture.hbs')
    expect($j('#myfixture')).toBeInDOM()
    // var fixture = setFixtures('<div class="post">foo</div>')
    // var post = fixture.find('.post')
  })

  it('can find an element from a loaded handlebars template in the DOM', function(){
    loadFixtures('myfixture.hbs')
    $('body').append(Handlebars.templates[rootTemplate]);
    expect($j('.title')).toBeInDOM();
  })
})

