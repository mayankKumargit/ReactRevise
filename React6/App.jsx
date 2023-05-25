import React from "react";
import Slot from './Slot_mach'

const App=()=>{
    return <>
		<h1 className="heading_style">🎰Welcome to slot machine game 🎰</h1>
		<div className="slot_machine">
			<Slot x='🤩' y='🤩' z='🤩'></Slot>
			<Slot x='🤩' y='😎' z='🤩'></Slot>
			<Slot x='🍎' y='🤩' z='🍏'></Slot>
			<Slot x='😈' y='😈' z='😈'></Slot>
		</div>
	</>
}

export default App;