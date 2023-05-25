import React from "react";
import SlotMatch from "./Slot_match.jsx";
import SlotNotMatch from './SlotNotMatch.jsx'

const Slot=(props)=>{
	/* let x='🤩'
	let y='🤩'
	let z='🤩' */
	return props.x === props.y && props.y === props.z ? <SlotMatch x={props.x} y={props.y} z={props.z}> </SlotMatch>
	: <SlotNotMatch x={props.x} y={props.y} z={props.z}> </SlotNotMatch>
}

export default Slot