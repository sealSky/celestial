import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import status from './status/reducer'

console.log(status);

const store = createStore(
  combineReducers({...status}),
  applyMiddleware(thunk)
)

export default store;