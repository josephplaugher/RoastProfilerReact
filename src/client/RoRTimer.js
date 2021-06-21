const RoRTimer = (NewChartData) => {
    var ft = jsonData.A;
    var st = NewChartData[0].dataPoints[NewChartData[0].dataPoints.length - 30].y
    var rise = ft - st;
    var RoR = rise / 30
    return RoR
}

export default RoRTimer