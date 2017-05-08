const store = () => {

  let initialState = undefined;

  let state = () => {
    return {};
  }
  let getState = () => {}
  let dispatch = (action) => {}

  return {
    initialState,
    state,
    getState,
    dispatch
  }
}
module.exports = store;
