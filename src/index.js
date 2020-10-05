import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import * as serviceWorker from './config/ServiceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
