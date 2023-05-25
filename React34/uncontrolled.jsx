import React, { useRef, useState } from "react";

const Uncontrolled=()=>{
    
    const Name=useRef(null)

    const [show,setShow]=useState(false);

    const submitForm=(e)=>{
        e.preventDefault();
        console.log(Name)
        console.log(Name.current)
        console.log(Name.current.value)
        const a=Name.current.value
        a===""?alert("fill the form"):setShow(true)
    }

    return(
        <>
            <h1>Uncontrolled form</h1>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Enter your name : </label>
                    <input type="text" id="name" ref={Name}></input>
                </div> <br></br>
                <button type="submit">Submit</button>
            </form>
            <p>{show ? `Your name is ${Name.current.value}`:""}</p>
        </>
    )
}
export default Uncontrolled