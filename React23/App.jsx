import React from "react";
import { Routes,Route} from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Error  from "./Error.jsx";
import Menu from './Menu.jsx'
const App=()=>{

	const Name=()=>{
		return <>
		<h1>My name is mayank kumar</h1>
		</>
	}

    return (
        <>
			<Menu></Menu>
		   {/* it is just like a switch case */}
			<Routes>
				<Route exact path="/" element={<About></About>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
				<Route path="/contact/name" element={<Name></Name>}></Route>
				<Route path="/*" element={<Error></Error>} ></Route>
				{/* <Route element={<Error></Error>} ></Route>  same as above */}
			</Routes>
			

			{/* <About></About>
			<Contact></Contact> */}
        </>
    )
}
export default App