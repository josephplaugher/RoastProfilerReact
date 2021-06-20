import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import InitialChartData from './InitialChartData'
import { io, Socket } from "socket.io-client"

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            InitialChartData: InitialChartData
        }
        this.updateChart = this.updateChart.bind(this)
        this.updateChart()
    }

    updateChart = () => {
        Socket.on('count', (newVal) => {
            s++//add 1 second to timer
            rorTimer++//add one second to rorTimer

            jsonData = JSON.parse(newVal.replace(/'/g, '"'))
            chart.options.data[0].dataPoints.push({ y: parseInt(jsonData.A) });
            chart.options.data[1].dataPoints.push({ y: parseInt(jsonData.B) });
            chart.render();

            beanTempDiv.innerHTML = jsonData.A;
            airTempDiv.innerHTML = jsonData.B;

            var currentDataArrayA = chart.options.data[0].dataPoints;
            var currentDataArrayB = chart.options.data[1].dataPoints;

            sessionStorage.setItem("BT", JSON.stringify(currentDataArrayA))
            sessionStorage.setItem("AT", JSON.stringify(currentDataArrayB))

            if (rorTimer == 30) {
                var ft = jsonData.A;
                var st = chart.options.data[0].dataPoints[chart.options.data[0].dataPoints.length - 30].y
                var rise = ft - st;
                var RoR = rise / 30
                RoR_el.innerHTML = RoR.toFixed(2);
                // plot the current RoR on the secondary Y axis
                chart.options.data[2].dataPoints.push({ y: parseInt(RoR.toFixed(2)), x: s });
                chart.render();
                // reset the rorTimer
                rorTimer = 0;
            }

            //time from first crack
            if (FirstCrackAchieved == true) {
                fct++;
                var time = SecondsToMinutes(fct)
                var timeStamp = time.minutes + ":" + time.seconds;
                tffc.innerHTML = timeStamp;
                var devTimeRatio = (fct / s).toFixed(2);
                dtr.innerHTML = devTimeRatio;
            }

        });
    }

    render() {

        const options = {
            animationEnabled: true,
            theme: "light2",
            axisY: { interval: 50, maximum: 550, title: "Bean Temp" },
            axisY2: { interval: 1, minimum: -1, maximum: 2, title: "Rate of Rise" },
            axisX: { intervalType: "seconds", interval: 30, minimum: 0, maximum: 720, title: "Time (Seconds)" },
            data: this.state.InitialChartData
        }

        return (
            <CanvasJSChart options={options} ></CanvasJSChart>
        )
    }
}

export default Chart