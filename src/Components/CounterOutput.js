import React from 'react'
import { useSelector } from "react-redux";

const CounterOutput = () => {
    
    const obj = useSelector((state) => ({
        counter : state.counter, 
        title : state.title
    }) )
    
    return(
        <div>
            <h3> Counter Value : {obj.counter} ------   {obj.title}  </h3>
        </div>
    )
}

export {CounterOutput}