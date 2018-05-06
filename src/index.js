import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SensorGraph from './components/SensorGraph';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


var sensorGraphInstance = ReactDOM.render(<SensorGraph />, document.getElementById('sensorGraph'));

