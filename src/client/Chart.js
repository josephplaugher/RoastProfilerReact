import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import InitialChartData from './InitialChartData'

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const options = {
            animationEnabled: true,
            theme: "light2",
            axisY: { interval: 50, maximum: 550, title: "Bean Temp" },
            axisY2: { interval: 1, minimum: -1, maximum: 2, title: "Rate of Rise" },
            axisX: { intervalType: "seconds", interval: 30, minimum: 0, maximum: 720, title: "Time (Seconds)" },
            data: InitialChartData
        }

        return (
            <CanvasJSChart options={options} ></CanvasJSChart>
        )
    }
}

export default Chart