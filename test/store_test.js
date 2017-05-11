let reducer = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
let expect = require('expect.js');

describe('store', () => {
  it('has an undefined initialState', () => {
    const store = require('../store.js')(reducer);

    expect(store.initialState).to.be(undefined)
  });
});

describe('getState', () => {
  it('returns the current state of the store', () => {
    const store = require('../store.js')(reducer);

    expect(store.getState()).to.eql(0);
  });
});

describe('subscribe', () => {
  it('it throws an error if no function is supplied', () => {
    const store = require('../store.js')(reducer);

    expect(() => store.subscribe('sstring')).to.throw
  });

  it('subscribes to the listeners array', () => {
    const store = require('../store.js')(reducer);

    expect(store.subscribe(() => console.log('subscribed'))).to.eql(true)
  });
});

describe('dispatch', () => {
  it('throws an error unless the dispatch action has a type', () => {
    expect(() => store.dispatch({chep: true})).to.throw;
  });

  it('dispatches an action to the store', () => {
    const store = require('../store.js')(reducer);
    let action = {type: 'INCREMENT'};

    expect(store.dispatch(action)).to.eql(action);
  });

  it('updates the state of the store', () => {
    const store = require('../store.js')(reducer);
    let action = {type: 'INCREMENT'};

    expect(store.getState()).to.eql(0);
    expect(store.dispatch(action)).to.eql(action);
    expect(store.getState()).to.eql(1);
  });
});
