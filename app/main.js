import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import todoApp from './reducers/index';

const defaultState = {
	todos: [
		{
			text: 'Kill some one',
			id: 0,
			completed: false
		},
		{
			text:'Complete todo',
			id:1,
			completed: false
		}
	]
}


let store = createStore(todoApp, defaultState);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
render(
	<Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app')
);
