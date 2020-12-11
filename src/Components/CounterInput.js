import React from 'react'
import { useDispatch } from "react-redux";

const CounterInput = () => {

    const dispatch = useDispatch()

    return(
        <>
        <button onClick={() => dispatch({
            type : 'INCREMENT',
            payload : 'Increment Start'
        }) } >+</button>
        <button onClick={() => dispatch({
            type : 'DECREMENT',
            payload : 'Decrement Start'
        }) } >-</button>



        </>
    )
}

export {CounterInput}