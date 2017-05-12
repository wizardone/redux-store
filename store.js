let observable = require('symbol-observable');

const store = (reducer, middlewares = []) => {
  if(typeof(reducer) != 'function'){
    throw('You must supply a function!');
  }
  let currentReducer = reducer;
  let currentState = undefined;
  let currentMiddlewares = middlewares;
  let listeners = [];

  let getState = () => {
    return currentState;
  }

  let subscribe = (listener) => {
    if(typeof listener != 'function'){
      throw('Store listeners must be functions');
    }
    listeners.push(listener);
    return true;
  }

  let dispatch = (action) => {
    if(!action.hasOwnProperty('type')){
      throw('Dispatch actions mush have a type property');
    }
    let state = currentReducer(currentState, action);
    currentState = state;

    return action;
  }

  dispatch({type: 'INITIALIZE'})

  return {
    getState,
    dispatch,
    subscribe
  }
}
module.exports = store;
