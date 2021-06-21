import React, { useState } from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import InitialChartData from './InitialChartData'
import RoRTimer from './RoRTimer'
import SocketIO from 'socket.io-client'
const Socket = SocketIO('localhost:3000')

const Chart = () => {

    const [ChartData, UpdateChartData] = useState(InitialChartData)

    const chartSetup = {
        animationEnabled: true,
        theme: "light2",
        axisY: { interval: 50, maximum: 550, title: "Bean Temp" },
        axisY2: { interval: 1, minimum: -1, maximum: 2, title: "Rate of Rise" },
        axisX: { intervalType: "seconds", interval: 30, minimum: 0, maximum: 720, title: "Time (Seconds)" },
        data: ChartData
    }

    Socket.on('count', (newVal) => {
        var s = 0
        var rorTimer = 0
        console.log('plot:', newVal)
        plotUpdates(chartSetup, newVal, s, rorTimer)
    });

    const plotUpdates = (chartSetup, newVal, s, rorTimer) => {
        var NewChartData = []
        s++//add 1 second to timer
        rorTimer++//add one second to rorTimer

        // plot the current temp data
        var jsonData = JSON.parse(newVal.replace(/'/g, '"'))
        chartSetup.data[0].dataPoints.push({ y: parseInt(jsonData.A) });
        chartSetup.data[1].dataPoints.push({ y: parseInt(jsonData.B) });

        // this where we would display the current temp every second. This would require passing down props normally
        // but we're going to use Redux instead, so we'll just comment it out for now
        // beanTempDiv.innerHTML = jsonData.A;
        // airTempDiv.innerHTML = jsonData.B;

        if (rorTimer == 30) {
            // plot the current RoR on the secondary Y axis
            //chartSetup.data[2].dataPoints.push({ y: parseInt(RoRTimer(chartSetup.data).toFixed(2)), x: s });
            // reset the rorTimer
            rorTimer = 0;
        }

        //time from first crack
        // if (FirstCrackAchieved == true) {
        //     fct++;
        //     var time = SecondsToMinutes(fct)
        //     var timeStamp = time.minutes + ":" + time.seconds;
        //     tffc.innerHTML = timeStamp;
        //     var devTimeRatio = (fct / s).toFixed(2);
        //     // this needs to be updated via Redux as well
        //     // dtr.innerHTML = devTimeRatio;
        // }
        UpdateChartData(NewChartData)

    }

    return (
        <CanvasJSChart options={chartSetup} ></CanvasJSChart>
    )

}

export default Chart