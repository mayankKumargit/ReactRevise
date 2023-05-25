import React, { useReducer } from "react";

const initialState=0
const reducer=(state,action)=>{
    console.log(state)
    console.log(action)
    console.log(action.type)
    if(action.type==="Increment")
        return state+1
    else if(action.type==="Decrement")
        return state-1
}

const UseReducer=()=>{
    // Reducers are pure functions that take in a state and function and return a new state
    // it is similar to useState()
    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        <>
            <div>
                <p>{state}</p>
                <div>
                    <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button><br></br>
                    <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button>
                </div>
            </div>
        </>
    )
}
export default UseReducer