import React from 'react'
import {firstName,lastName} from './App.jsx'


const ComC=()=>{
    return (
        <firstName.Consumer>{ (fname)=>{
            return (
                <lastName.Consumer>{ (lname)=>{
                    return <h1>This is {fname} {lname}</h1>
                    }
                }
                </lastName.Consumer>
            )    
            }
        }
        </firstName.Consumer>
    )
    
}

export default ComC


// for single context value
/* const ComC=()=>{
    return (
        <firstName.Consumer>{ (fname)=>{
            return <h1>This is {fname}</h1>
            }
        }
        </firstName.Consumer>
    )
    
} */