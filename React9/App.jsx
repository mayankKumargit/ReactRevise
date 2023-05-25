import React, { useState } from "react";

const App=()=>{
	const [currTime,updatedTime]=useState(new Date().toLocaleTimeString())
	setInterval(()=>{
		updatedTime(new Date().toLocaleTimeString())
	},1000)
	return(
		<>
			<h1>{currTime}</h1>
		</>
	)
}

export default App