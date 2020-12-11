const initializeState = {
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
            };
        case 'DECREMENT':
            return {
                ...state,
                counter : state.counter - 1,
            }
        default:
            return state
    }
}

export default CounterReducer;