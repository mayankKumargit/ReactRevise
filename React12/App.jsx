
import React, { useState } from "react";
 
const App=()=>{

	const [firstName,setFirstName]=useState("")
	const [fullName,setFullName]=useState("")
	const [lastName,setLastName]=useState('')

	const inputEvent=(event)=>{
		console.log(event)
		console.log(event.target.value)
		setFirstName(event.target.value)
	}
	const Submit=(event)=>{
		event.preventDefault()
		setFullName(firstName+" "+lastName)
		setFirstName('')
		setLastName('')
	}
	const inputEventTwo=(event)=>{
		setLastName(event.target.value)
	}
	return(
		<>
			<form onSubmit={Submit}>
				<div>
					<h1>Hello {fullName}</h1>
					
					<input type="text" placeholder="Enter your first name" /* defaultValue="Mayank" */
					onChange={inputEvent} value={firstName}></input>

					<input type="text" placeholder="Enter your last name"
					onChange={inputEventTwo} value={lastName}></input>

					<button type="submit">Click me</button>
				</div>
			</form>
		</>
	)
}

export default App