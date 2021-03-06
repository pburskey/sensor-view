import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SensorGraph from './components/SensorGraph';
import registerServiceWorker from './registerServiceWorker';
import SensorOverview from './components/SensorEventOverview';
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


var sensorGraphHistoryInstance = ReactDOM.render(<SensorGraph limit={1}/>, document.getElementById('sensorGraph_current'));
var sensorGraphCurrerntInstance = ReactDOM.render(<SensorGraph limit={5}/>, document.getElementById('sensorGraph_history'));
ReactDOM.render(<SensorOverview/>, document.getElementById('sensor_overview'));
