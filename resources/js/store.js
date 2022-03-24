import {createStore,applyMiddleware} from 'redux';
import {composeٌithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk';


const initialState = {};
const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState , 
	composeٌithDevTools(applyMiddleware(...middleware))
);

export default store;