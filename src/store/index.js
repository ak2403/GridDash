import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import reducer from '../reducer';

const thunkMiddleware = applyMiddleware(thunk);

const Store = createStore(reducer, thunkMiddleware);

export default Store;
