import React from 'react'
import { CounterInput } from "./CounterInput";
import { CounterOutput } from "./CounterOutput";

const App = () => {
    return(
        <div>
            <h1>Counter App</h1>
            <CounterOutput />
            <br />
            <CounterInput />
        </div>
    )
}

export default App