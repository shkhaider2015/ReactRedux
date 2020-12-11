import React from 'react'
import { CounterInput } from "./CounterInput";
import { CounterOutput } from "./CounterOutput";
import { TeamInput } from './TeamInput';

const App = () => {
    return(
        <div>
            <h1>Counter App</h1>
            <CounterOutput />
            <br />
            <CounterInput />
            <TeamInput />
        </div>
    )
}

export default App