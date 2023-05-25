import React, { useEffect,useState } from 'react'



const App=()=>{
    
    const [num,setNum]=useState(0)

    useEffect(()=>{
        //alert("you have clicked")
        document.title=`You have clicked ${num} times`
    })

    return (
        <>
            <button onClick={()=>{
                setNum(num+1)
            }}>Increment {num}</button>
        </>
    )
}

export default App
