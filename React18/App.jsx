import React, { useEffect,useState } from 'react'



const App=()=>{
    
    const [num,setNum]=useState(0)
    const [nums,setNums]=useState(0)

    // it expect a callback function and it will execute each time whenever document render changes
    /* useEffect(()=>{
        alert("you have clicked")
    }) */

    // it will execute when document refresh first time not every time when document render changes
    /* useEffect(()=>{
        alert("you have clicked")
    },[]) */

    // it will execute only when first button clicked because num value changes
    useEffect(()=>{
        alert("you have clicked")
    },[num])

    return (
        <>
            <button onClick={()=>{
                setNum(num+1)
            }}>Increment {num}</button>

            <br></br>

            <button onClick={()=>{
                setNums(nums+1)
            }}>Increment {nums}</button>
        </>
    )
}

export default App
