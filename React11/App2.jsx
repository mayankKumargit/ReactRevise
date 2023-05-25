
import React, { useState } from "react";
 
const App=()=>{

	const [name,setName]=useState("")
	const [fullName,setFullName]=useState("")
	const inputEvent=(event)=>{
		console.log(event)
		console.log(event.target.value)
		setName(event.target.value)
	}
	const Submit=(e)=>{
		e.preventDefault()
		setFullName(name)
		setName('')
	}
	return(
		<>
			<form onSubmit={Submit}>
				<div>
					<h1>Hello {fullName}</h1>
					<input type="text" placeholder="Enter your name" /* defaultValue="Mayank" */
					onChange={inputEvent} value={name}></input><br></br>
					<button type="submit">Click me</button>
				</div>
			</form>
		</>
	)
}

export default App