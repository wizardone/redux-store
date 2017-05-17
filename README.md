# redux-store
My own implementation of a redux store
Works very much like the original Redux, but it is a slimmed down
version of it.

The api is the same as Redux
```javascript
// Implement your own reducer
let store = require('redux-store')(reducer);

store.getState();
=> returns the default state

store.subscribe(() => console.log('Subscribed'));

store.dispatch({type: "INCREMENT"});
```
