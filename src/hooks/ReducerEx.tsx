import  { FunctionComponent, useReducer } from 'react'

const reducer = (state: CountState, action: CountAction) => {
    const {type, payload} = action;;
    switch(type) {
        case ActionType.INCREASE:
            return {
                count: state.count + payload
            }
        case ActionType.DECREASE:
            return {
                count: state.count - payload
            }
        case ActionType.DOUBLE:
            return {
                count: state.count * payload
            }
        default:
            return state
    }
}

const ReducerEx: FunctionComponent = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <>
        <p>Count: {state?.count}</p>
        <button onClick={() => dispatch({type: ActionType.INCREASE, payload: 1})}>+</button>
        <button onClick={() => dispatch({type: ActionType.DECREASE, payload: 1})}>-</button>
        <button onClick={() => dispatch({type: ActionType.DOUBLE, payload: 2})}>*</button>
    </>
  )
}

// An enum with all our types of actions to use in our reducer
enum ActionType {
    INCREASE ='INCREASE',
    DECREASE = 'DECREASE',
    DOUBLE = 'DOUBLE'
}

interface CountAction {
    type: ActionType;
    payload: number
}

interface CountState {
    count: number
}

export default ReducerEx
