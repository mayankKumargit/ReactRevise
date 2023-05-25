
import React, { useState } from "react";
 
const App=()=>{

	const [fullName,setFullName]=useState({
		fname:'',
		lname:'',
		email:'',
		phone:''
	});
	

	const inputEvent=(event)=>{
	//	console.log(event)
		console.log(event.target.value)
		console.log(event.target.name)
	//	console.log(event.target.placeholder)

		/* const value=event.target.value
		const name=event.target.name */
		const {value,name}=event.target
		console.log(value)

		setFullName((prevVal)=>{
			console.log(prevVal)
			console.log(prevVal.fname)

			return{
				...prevVal,
				[name]:value
			}
			// if(name === 'fName'){
			// 	return{
			// 		fname:value,
			// 		lname:prevVal.lname,
			// 		email:prevVal.email,
			// 		phone:prevVal.phone
			// 	}
			// }
			// else if(name === 'lName'){
			// 	return{
			// 		lname:value,
			// 		fname:prevVal.fname,
			// 		email:prevVal.email,
			// 		phone:prevVal.phone
			// 	}
			// }
			// else if(name === 'Email'){
			// 	return{
			// 		lname:prevVal.lname,
			// 		fname:prevVal.fname,
			// 		email:value,
			// 		phone:prevVal.phone
			// 	}
			// }
			// else if(name === 'Phone'){
			// 	return{
			// 		lname:prevVal.lname,
			// 		fname:prevVal.fname,
			// 		email:prevVal.email,
			// 		phone:value
			// 	}
			// }
		})
	}
	const Submit=(event)=>{
		event.preventDefault()
		alert('form submitted')
	}

	return(
		<>
			<form onSubmit={Submit}>
				<div>
					<h1>Hello {fullName.fname} {fullName.lname}</h1>
					<p>{fullName.email}</p>
					<p>{fullName.phone}</p>

					<input type="text" placeholder="Enter your first name" 
					onChange={inputEvent} value={fullName.fname}
					name="fname"
					></input>

					<input type="text" placeholder="Enter your last name"
					onChange={inputEvent} value={fullName.lname}
					name="lname"
					></input>

					<input type="email" placeholder="Enter your email"
					onChange={inputEvent} value={fullName.email}
					name="email"
					></input>

					<input type="number" placeholder="Enter your phone number"
					onChange={inputEvent} value={fullName.phone}
					name="phone"
					></input>
					<button type="submit">Click me</button>
				</div>
			</form>
		</>
	)
}

export default App