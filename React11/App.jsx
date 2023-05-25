
import React, { useState } from "react";
 
const App=()=>{

	const [name,setName]=useState("")
	const [fullName,setFullName]=useState("")
	const inputEvent=(event)=>{
		console.log(event)
		console.log(event.target.value)
		setName(event.target.value)
	}
	const Submit=()=>{
		setFullName(name)
		setName('')
	}
	return(
		<>
			<div>
				<h1>Hello {fullName}</h1>
				<input type="text" placeholder="Enter your name" /* defaultValue="Mayank" */
				onChange={inputEvent} value={name}></input>
				<button onClick={Submit}>Click me</button>
			</div>
		</>
	)
}

export default App