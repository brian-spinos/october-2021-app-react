import { createStore, combineReducers } from 'redux'
import counterReducer from '../reducers/counterReducer';
import fooReducer from '../reducers/fooReducer';

const allReducers = combineReducers({
  counter: counterReducer, // 'counter' will be a key in the store
  foo: fooReducer, // 'foo' will be a key in the store
});
let store = createStore(allReducers); // store is aware of the reducers

export default store;


// dispatch action
// store.dispatch(counterActions.actionA(123));
