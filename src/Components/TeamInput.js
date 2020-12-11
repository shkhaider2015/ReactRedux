import React from 'react'
import { useDispatch } from "react-redux";


const TeamInput = () => 
{
    const dispatch = useDispatch(); 
    const [team, setTeam] = React.useState('ajax');
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setTeam(e.target.value)
    }
    
    return(
        <>
        <br />
            <input value={team} onChange={handleChange} />
            
            <button onClick={() => dispatch({
            type : 'teamName',
            payload : team
        }) } >Set Team</button>
        </>
    )
}

export {TeamInput}