import {createStore} from 'redux';
import todoApp from './reducers/reducers';

let store = createStore(todoApp, {todos:default_todos});
