import React from "react";



const Sresult=(props)=>{
    let source=`https://picsum.photos/800/400/?${props.name}`
    return (
        <>
            <div>
                <img src={source} alt="random"/>
            </div>
        </>
    )
}

export default Sresult
