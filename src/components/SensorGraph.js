import React, { Component } from 'react';
import './SensorGraph.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class SensorGraph extends Component {

    constructor(props)
    {
        super(props);
        this.state =
        {
            description: '',
            limit: props.limit,
            payloads: []
                    };

        this.state.getLatestData = this.getLatestData.bind(this);

        if (this.state.limit > 1)
        {
            this.state.description = 'Historical';
        }
        else
        {
            this.state.description = 'Current';
        }


    }


    componentDidMount() {

        var timer = setInterval(() => {
            this.state.payloads = [];
            this.state.getLatestData();
        }, 30000);
    }



    getLatestData(event)
    {
        const me = this;
        // var url = "http://eskimo:8080/sensor/events/last?limit=" + me.state.limit;
        var url = "http://burskey.com:8080/sensor/events/last?limit=" + me.state.limit;
        // var url = "http://burskey.com:8080/sensor/events/last?limit=1";
        var request = new Request(url, {
            method: 'GET' ,
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        });

        fetch(request)
            .then(function (resp) {
                let json = resp.json();
                if (resp.status >=200 && resp.status < 300)
                {
                    return json;
                }
                else
                {
                    return json.then(Promise.reject.bind(Promise));
                }
            })
            .then(function (json) {

                var payloads = me.state.payloads;
                for(var i =0; i< json.length; i++)
                {
                    var aJSONObject = json[i];
                    var measurement = aJSONObject.measurement;
                    var number = parseInt(measurement);
                    var payload = new SensorGraphPayload(number);

                    payloads.push(payload.data);
                }

                me.setState({payloads: payloads});





            })


    }






    render() {

        return (
                <fieldset >
                    <legend>Measurements: {this.state.description}</legend>
                <SimpleLineChart payloads={this.state.payloads}/>
                </fieldset>
    );
    }
}
export default SensorGraph;

function SensorGraphPayload(measurement)
{
    this.measurement = 0;
    this.data =
        {
            measurement: measurement
        }


}

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];




class SimpleLineChart extends Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <LineChart width={800} height={400} data={this.props.payloads}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis />
                <YAxis datakey="measurement"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="measurement" stroke="#8884d8" activeDot={{r: 8}}/>
                {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
            </LineChart>
        );
    }

}

