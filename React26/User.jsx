import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User=()=>{
    const {fname,lname}=useParams()
    const location=useLocation()
    console.log(location)
    return(
        <>
            <h1>user {fname} {lname} page</h1>
            <p>My current location is {location.pathname}</p>
            {
                location.pathname==='/user/mayank/cri' ? <button onClick={()=>{alert('you got me')}}>Click me</button>:null
            }
        </>
    )
}

export default User