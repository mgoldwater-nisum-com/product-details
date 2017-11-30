jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';

describe('testing out jasmine-jquery', function(){
  it('can find an element in the dom using jasmine-jquery', function(){
    loadFixtures('myfixture.html')
    expect($j('#myfixture')).toBeInDOM()
    // var fixture = setFixtures('<div class="post">foo</div>')
    // var post = fixture.find('.post')
  })
})

