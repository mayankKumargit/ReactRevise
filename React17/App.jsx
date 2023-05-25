import React, { createContext } from 'react'
import ComA from './ComA.jsx'

const firstName=createContext()

// creating another context
const lastName=createContext()

const App=()=>{
    return (
        <>
            <firstName.Provider value={"Mayank"}>
                <lastName.Provider value={"Singh"}>
                    <ComA></ComA>
                </lastName.Provider>
            </firstName.Provider>
        </>
    )
}

export default App
export {firstName,lastName}