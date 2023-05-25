import React from "react";
import ReactDOM from 'react-dom'

// default variable can be imported using any name
import at from './App.jsx'

// variable without default export must have the same name as imported variable
import actor2 from "./App.jsx";

// We have to use curly braces when we have to import multiple variable
import { actor3,actor4,any} from "./App.jsx";

//import at,{actor2,actor3,actor4,actor5} from './App.jsx'
ReactDOM.render(<ol>
                    <li>Mayank</li>
                    <li>{at}</li>
                    <li>{actor2}</li>
                    <li>{actor3}</li>
                    <li>{actor4}</li>
                    <li>{any()}</li>
                </ol>,
                document.getElementById('root'))