let reducer = (state = {counter: 0}, action) => {
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

describe('getState', () => {
  it('returns the current state of the store', () => {
    expect(store.getState()).to.eql(undefined);
  });
});

describe('subscribe', () => {
  it('it throws an error if no function is supplied', () => {
    expect(() => store.subscribe('sstring')).to.throw
  });

  it('subscribes to the listeners array', () => {
    expect(store.subscribe(() => console.log('subscribed'))).to.eql(true)
  });
});

describe('dispatch', () => {
  it('throws an error unless the dispatch action has a type', () => {
    expect(() => store.dispatch({chep: true})).to.throw;
  });

  it('dispatches an action to the store', () => {
    let action = {type: 'INCREMENT'};

    expect(store.dispatch(action)).to.eql(action);
  });
});
