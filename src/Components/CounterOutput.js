import React from 'react'
import { useSelector } from "react-redux";

const CounterOutput = () => {
    
    const obj = useSelector((state) => ({
        counter : state.counter, 
        title : state.title,
        team : state.team
    }) )
    
    return(
        <div>
            <h3> Counter Value : {obj.counter} ------   {obj.title} --- Team Name : {obj.team}  </h3>
        </div>
    )
}

export {CounterOutput}