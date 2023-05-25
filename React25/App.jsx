import React from "react";
import { Routes,Route} from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Error  from "./Error.jsx";
import Menu from './Menu.jsx'
import User from './User.jsx'

const App=()=>{

	const Name=(props)=>{
		return <>
		<h1>My name is {props.name} kumar</h1>
		</>
	}

    return (
        <>
			<Menu></Menu>
			<Routes>
				<Route exact path="/" element={<About name='About'></About>}></Route>
				<Route path="/contact" element={<Contact name='Contact'></Contact>}></Route>
				<Route path="/contact/name" element={<Name name='Mayank'></Name>}></Route>
				<Route path="/user/:fname/:lname" element={<User></User>}></Route>
				<Route path="/*" element={<Error></Error>} ></Route>
			</Routes>
        </>
    )
}
export default App