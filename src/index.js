import htm from 'htm';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

htm.bind(React.createElement);

ReactDOM.render(htm`<${App} />`, document.getElementById('root'));
