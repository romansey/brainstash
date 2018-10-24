import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import reducer from './reducers';

const enhancer = compose(persistState());

export default createStore(reducer, enhancer);
