import React, { useState } from "react";

const App=()=>{
	const [currTime,updatedTime]=useState(new Date().toLocaleTimeString())
	const getCurrentTime=()=>{
		updatedTime(new Date().toLocaleTimeString())
	}
	return(
		<>
			<h1>{currTime}</h1>
			<button onClick={getCurrentTime}>Click to get current time</button>
		</>
	)
}

export default App