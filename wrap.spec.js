const { expect } = require('chai')
const wrap = require('./wrap')


describe('wrap function', function(){
  // check that is has 2 arguments
  // check that is has line breaks
  it('return a string', function(){
    expect(wrap("Lorem ipsum dolor sit eu amet")).to.equal('Lorem ipsum dolor sit eu amet')
  })
  it('should have 2 arguments', function(){
    // let string = "fullstack"
    // let num = 2
    // expect(arguments).to.be.arguments
  })
})
