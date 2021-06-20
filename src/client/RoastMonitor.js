import React from 'react'

const RoastMonitor = () => {
    return (
        <div>
            <p>Air: <span id='air-temp'></span><span> |</span></p>
            <p>Bean: <span id='bean-temp'></span><span> |</span></p>
            <p>RoR: <span id='ror'></span><span> |</span></p>
            <p>Time from First Crack: <span id='tffc'></span><span> |</span></p>
            <p>Dev Time Ratio: <span id='dtr'></span></p>
        </div>
    )
}

export default RoastMonitor