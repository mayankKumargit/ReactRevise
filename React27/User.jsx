import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const User=()=>{
    const {fname,lname}=useParams()
    
    const history=useNavigate()
    console.log(history)
    return(
        <>
            <h1>user {fname} {lname} page</h1>
            <button onClick={()=>history(-1)}>Go Back</button>  {/* -1 for go to previous page */}
            <button onClick={()=>history('/contact')}>Go Contact page</button>
        </>
    )
}

export default User 