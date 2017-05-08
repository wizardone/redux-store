let expect = require('expect.js');
let store = require('../store.js')();

describe('store', () => {
  it('has an undefined initialState', () => {
    expect(store.initialState).to.be(undefined)
  });
});

describe('state', () => {
  it('returns the current state of the store', () => {
    expect(store.state()).to.eql({})
  });
});
