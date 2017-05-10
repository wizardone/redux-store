const store = (reducer) => {
  if(typeof(reducer) != 'function'){
    throw('You must supply a function!');
  }
  let currentReducer = reducer;
  let initialState = currentReducer.state;
  let currentState = initialState;
  let middlewares = [];
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

    return action;
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
module.exports = store;
