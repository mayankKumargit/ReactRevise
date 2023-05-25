import React from 'react'

const ToDoList=(props)=>{
    
    

    return(
        <div className='todo_style'>
            <i className='fa-times' onClick={()=>{
                props.onSelect(props.id)
            }}>❌</i>
            <li>{props.text}</li>
        </div>
    )
}

export default ToDoList