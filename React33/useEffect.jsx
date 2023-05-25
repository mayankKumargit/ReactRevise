import React, { useEffect, useState } from "react";

const UseEffect=()=>{

    const [width,setWidth]=useState(window.innerWidth)

    const actualWidth=()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        console.log("adding event")
        window.addEventListener("resize",actualWidth)

        return()=>{
            window.removeEventListener("resize",actualWidth)
            console.log("removing event")
        }
    })

    console.log("experimenting")

    return(
        <>
            <p>The Actual size of the window is </p>
            <h1>{width}</h1>
        </>
    )
}

export default UseEffect