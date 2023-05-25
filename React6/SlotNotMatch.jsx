import React from "react";

const Slot_not_match=(props)=>{
    return(
        <>
            <div className="slot_inner">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>This is not matching</h1>
                <hr></hr>
            </div>
        </>
    )
}

export default Slot_not_match