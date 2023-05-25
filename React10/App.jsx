import React, { useState } from "react";

const App=()=>{
	const oldBg="purple"
	const [bg,setBg]=useState(oldBg)
	let oldName="click me 😎"
	const [name,setName]=useState(oldName)
	const bgChange=()=>{
		console.log('clicked')
		let newBg="green"
		setBg(newBg)
		setName("Double click to go previous 😁")
	}
	const reverseChange=()=>{
		setBg(oldBg)
		setName(oldName)
	}
	return(
		<>
			<div style={{backgroundColor:bg}}>
				<button onClick={bgChange} onDoubleClick={reverseChange}>{name}</button>
				{/* <button onMouseEnter={bgChange} onMouseLeave={reverseChange}>{name}</button> */}
			</div>
		</>
	)
}

export default App