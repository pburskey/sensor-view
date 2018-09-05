import React, {Component} from 'react';
import './SensorEventOverview.css';

class SensorEventOverview extends Component
{
    constructor(props)
    {
        super(props);
        // this.state =
        //     {
        //         limit: props.limit,
        //         payloads: []
        //     };
        //
        // this.state.getLatestData = this.getLatestData.bind(this);




    }

    //
    // componentDidMount() {
    //
    //     var timer = setInterval(() => {
    //         this.state.payloads = [];
    //         this.state.getLatestData();
    //     }, 30000);
    // }


    //
    // getLatestData(event)
    // {
    //     const me = this;
    //     // var url = "http://eskimo:8080/sensor/events/last?limit=" + me.state.limit;
    //     var url = "http://burskey.com:8080/sensor/events/last?limit=" + me.state.limit;
    //     // var url = "http://burskey.com:8080/sensor/events/last?limit=1";
    //     var request = new Request(url, {
    //         method: 'GET' ,
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type' : 'application/json'
    //         }
    //     });
    //
    //     fetch(request)
    //         .then(function (resp) {
    //             let json = resp.json();
    //             if (resp.status >=200 && resp.status < 300)
    //             {
    //                 return json;
    //             }
    //             else
    //             {
    //                 return json.then(Promise.reject.bind(Promise));
    //             }
    //         })
    //         .then(function (json) {
    //
    //             var payloads = me.state.payloads;
    //             for(var i =0; i< json.length; i++)
    //             {
    //                 var aJSONObject = json[i];
    //                 var measurement = aJSONObject.measurement;
    //                 var number = parseInt(measurement);
    //                 var payload = new SensorGraphPayload(number);
    //
    //                 payloads.push(payload.data);
    //             }
    //
    //             me.setState({payloads: payloads});
    //
    //
    //
    //
    //
    //         })
    //
    //
    // }






    render() {

        return (
            <section>
                <h2>Sensor Information</h2>
                <fieldset >
                    <legend>Sensor Information</legend>
                    <ul>
                        <li>
                            <label htmlFor="range">
                                <span>Range: </span>
                            </label>
                            <label id="range" name="range">nnnnn - nnnnn</label>
                        </li>
                        <li>
                            <label htmlFor="periodDisposition">
                                <span>Period Disposition: </span>
                            </label>
                            <label id="periodDisposition" name="periodDisposition" >Descending</label>
                        </li>
                        <li>
                            <label htmlFor="start">
                                <span>Start: </span>
                            </label>
                            <label id="start" name="start" >mm/dd/yyyy hh24:mi:ss</label>
                        </li>
                        <li>
                            <label htmlFor="stop">
                                <span>Stop: </span>
                            </label>
                            <label className="right" id="stop" name="stop" >mm/dd/yyyy hh24:mi:ss</label>
                        </li>
                    </ul>
                </fieldset>
                <p>
                    <label htmlFor="sensorEventCount">
                        <span>Sensor Events: </span>
                    </label>
                    <label className="right" id="sensorEventCount" name="sensorEventCount" >987</label>
                </p>
                <p>
                    <label htmlFor="lastSensorCheckin">
                        <span>Last Sensor Checkin: </span>
                    </label>
                    <label className="right" id="lastSensorCheckin" name="lastSensorCheckin" >mm/dd/yyyy hh24:mi:ss</label>
                </p>
                <p>
                    <label htmlFor="measurementCount">
                        <span>Measurements: </span>
                    </label>
                    <label className="right" id="measurementCount" name="measurementCount" >12345</label>
                </p>
            </section>
        );
    }
}
export default SensorEventOverview;

function SensorGraphPayload(measurement)
{
    this.measurement = 0;
    this.data =
        {
            measurement: measurement
        }


}



