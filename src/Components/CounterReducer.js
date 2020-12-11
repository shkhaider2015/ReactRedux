const initializeState = {
    title : "not selected",
    counter  : 0,
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
        default:
            return state
    }
}

export default CounterReducer;