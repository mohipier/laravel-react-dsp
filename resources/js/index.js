import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import CampaignApp from './CampaignApp';

const store = createStore(reducers , compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
			<CampaignApp /> 
	</Provider>, 
	document.getElementById('app')
	);