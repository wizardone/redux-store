let reducer = (state = {}, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state.counter + 1
  case 'DECREMENT':
    return state.counter - 1
  default:
    return state
  }
}

let expect = require('expect.js');
let store = require('../store.js')(reducer);

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

describe('dispatch', () => {
  it('throws an error unless the dispatch action has a type', () => {
    expect(() => store.dispatch({chep: true})).to.throw;
  });
});
