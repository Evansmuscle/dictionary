import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
