import React, { useState } from "react";

const UseStateObject=()=>{

    const [obj,setObj]=useState({
        myName:"Mayank",myAge:20,degree:"B.Tech"
    })

    const changeObject=()=>{
        setObj({...obj,myName:"Raina"})
    }
    return(
        <>
            <h1>Name : {obj.myName} age : {obj.myAge} degree : {obj.degree}</h1>
            <button onClick={changeObject}>update</button>
        </>
    )
}

export default UseStateObject