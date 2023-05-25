import React, { useState } from "react";

const UseStateArray=()=>{

    
    const bioData=[
        {id:0,name:"mayank"},
        {id:1,name:"kumar"}
    ]
    
    const [currArr,setArr]=useState(bioData)

    const clearArray=()=>{
        setArr([])
    } 
    return(
        <>
            {
                currArr.map((value)=>{
                    return <h1>id : {value.id} name : {value.name}</h1>
                })
            }
            {/* <p>just for experiment</p> */}
            <button onClick={clearArray()}>Clear</button>
        </>
    )
}

export default UseStateArray