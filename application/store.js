import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const enhancers = compose(
  applyMiddleware(thunk),
)

const store = createStore(rootReducer, enhancers)

export default store
