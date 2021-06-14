import React from 'react'
import BatchSetup from './BatchSetup'
import RoastControls from './RoastControls'
import RoastMonitor from './RoastMonitor'
import Chart from './Chart'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id='container'>
                <h3>Roast Profile</h3>
                <BatchSetup></BatchSetup>
                <RoastControls></RoastControls>
                <RoastMonitor></RoastMonitor>
                <Chart></Chart>
            </div>
        )
    }
}

export default App;