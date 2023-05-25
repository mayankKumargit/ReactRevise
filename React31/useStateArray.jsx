import React, { useState } from "react";

const UseStateArray=()=>{

    const bioData=[
        {id:0,name:"mayank",age:20},
        {id:1,name:"akshay",age:50},
        {id:2,name:"vidyut",age:45}
    ]

    const [arr,setArray]=useState(bioData)

    const removeElement=(id)=>{
        alert("removed")
        const newArray=arr.filter((currValue)=>{
            return currValue.id !== id
        })
        setArray(newArray)
    }

    return(
        <>
            {
                arr.map((currEl)=>{
                    return (
                        <>
                            <h1>Name : {currEl.name} and age : {currEl.age}</h1>
                            {/* <button onClick={removeElement(currEl.id)}>Remove</button> */}
                            {/* when we pass argument to function in react then on spot it calls that function without any event
                                So when we want to pass any argument to any function in react we have to use arrow function*/}
                            <button onClick={()=>{removeElement(currEl.id)}}>Remove</button>

                        </>
                    )
                         
                })
            }
            
        </>
    )
}

export default UseStateArray

