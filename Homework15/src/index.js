import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import ReactSlider from './ReactSlider.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactSlider />, document.getElementById('main'));
registerServiceWorker();
