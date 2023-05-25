import React, { useState } from "react";
import Sresult from "./Sresult.jsx";
const Search=()=>{

    const [img,setImage]=useState("")

    const inputEvent=(event)=>{
        const data=event.target.value
        console.log(event.target.value)
        setImage(data)
    }

    return (
        <>
            <div className="searchbar">
                <input 
                type="text" 
                placeholder="search anything"
                value={img}
                onChange={inputEvent}
                >
                </input>
                {img === "" ? null : <Sresult name={img}></Sresult>}
                
            </div>
        </>
    )
}

export default Search