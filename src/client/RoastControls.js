import React from 'react'

const RoastControls = () => {

    return (
        <div id="roast-controls">
            <input type="button" className="button" id="start-button" value="Start" />
            <input type="button" className="button" id="stop-button" value="Stop" />
            <input type="button" className="button" id="reset-button" value="Reset Chart" /><br />
            <input type="button" className="button" id="yellow-button" value="Yellow" />
            <p id="yellow">[placeholder]</p>
            <input type="button" className="button" id="firstcrack-button" value="First Crack" />
            <p id="firstcrack">[placeholder]</p>
            <input type="button" className="button" id="done-button" value="Done" />
            <p id="done">[placeholder]</p>
            <input type="button" className="button" id="print" value="Print" />
            <input type="button" className="button" id="save" value="Save" />
            <p id="confirm"></p>
        </div>
    )
}

export default RoastControls