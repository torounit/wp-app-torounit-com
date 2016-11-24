import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk        from 'redux-thunk'
import { fetchPosts } from './actions/posts';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware( thunk, logger ) );
const container = document.querySelector('#app');
console.log("!")
store.dispatch( fetchPosts() ).then(() =>
	console.log("loaded")
).then( () => {
	"use strict";
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	container
);



