const store = (reducer) => {
  if(typeof(reducer) != 'function'){
    throw('You must supply a function!');
  }
  let initialState = undefined;
  let middlewares = [];

  let state = () => {
  }
  let getState = () => {}
  let subscribe = () => {}
  let dispatch = (action) => {
    if(!action.hasOwnProperty('type')){
      throw('Dispatch actions mush have a type property')
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
module.exports = store;
