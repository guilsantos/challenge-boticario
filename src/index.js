import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
