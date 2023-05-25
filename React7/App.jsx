import React, { useState } from 'react'

const App=()=>{
	const [count,incCount]=useState(0) // useState() returns two value one is initial value and other is function
	const IncNum=()=>{
		incCount(count+1)
		//console.log('clicked')
	}
	return(
		<>
			<h1>{count}</h1>
			<button onClick={IncNum}>Click me</button>
		</>
	)
}

export default App


/* Array destructuring
const arr=["apple","peach","mango"]
const [fruit1,fruit2,fruit3]=arr
console.log(fruit1)  // apple
*/