import React, {useState} from "react";
import ToDoList from "./ToDoList.jsx";

const App=()=>{

	const [inputList,setInputList]=useState("")
	const [Items,setItems]=useState([])

	const itemEvent=(event)=>{
		setInputList(event.target.value)
	}

	const listOfItems=()=>{
		setItems((oldItems)=>{
			return [...oldItems,inputList]
		})
		setInputList('')
	}

	const deleteItems=(id)=>{
        console.log('deleted')

		setItems((oldItems)=>{
			return oldItems.filter((arrEle,index)=>{
				return index!==id;
			})
		})
    }

	return(
		<>
			<div className="main_div">
				<div className="center_div">
					<h1>To-do list</h1>
					<input type="text" placeholder="Enter your task" onChange={itemEvent} value={inputList}></input>
					<button onClick={listOfItems}>+</button>
					<ol>
						{/* <li>{inputList}</li> */}
						{ Items.map((itemVal,index)=>{
							return(
									<ToDoList text={itemVal}
											  id={index}
											  key={index}
											  onSelect={deleteItems}>
									</ToDoList>
								)
							}) }
						
					</ol>
				</div>
			</div>
		</>
	)
}
export default App