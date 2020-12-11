const initializeState = {
    title : "not selected",
    counter  : 0,
    team : 'ajax'
}

const CounterReducer = (state = initializeState, action) => 
{
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                ...state,
                counter : state.counter + 1,
                title : action.payload
            };
        case 'DECREMENT':
            return {
                ...state,
                counter : state.counter - 1,
                title : action.payload
            }
            case 'teamName':
                return{
                    ...state,
                    team : action.payload
                }
        default:
            return state
    }
}

export default CounterReducer;