
import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';
import rootReducer  from './reducers/reducers';

render(
	<Root />,
    document.getElementById('app')
);
