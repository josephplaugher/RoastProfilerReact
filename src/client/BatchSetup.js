import React from 'react'

const BatchSetup = () => {

    return (
        <div id="batch-setup">
            <p>Coffee </p><input type="text" id="coffee"></input>
            <p>Batch </p><input type="text" id="batch" size="40"></input>
            <select id='get-batch'>
                <option>Pull a previous batch</option>
            </select>
        </div>
    )

}

export default BatchSetup