import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing/Landing';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));

serviceWorker.unregister();
