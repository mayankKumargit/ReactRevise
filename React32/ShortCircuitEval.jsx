import React from "react";

const ShortCircuit=()=>{
    const demo1=""
    const demo2="something"
    return( 
        <>
            <h1>Short circuit evaluation in react</h1>
            <h1>{34+34}</h1>

            <h1>{demo1 || "|| operator print the right side if condition is false, here demo1 is null so it will print the rhs"}</h1>
            <h1>{ demo2 || "lhs will printed because demo2 is not null it means it is true" }</h1>

            <h1>{ demo2 && "rhs will printed because demo2 is not null it means it is true" }</h1>
            <h1>{demo1 && "|| operator print the right side if condition is false, here demo1 is null so it will print the rhs"}</h1>
        </>
    )
}
export default ShortCircuit