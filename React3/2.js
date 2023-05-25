import React from "react";
import ReactDOM from 'react-dom'
import * as ques from './App.jsx'

ReactDOM.render(<ol>
                    <li>Mayank</li>
                    <li>{ques.default}</li>
                    <li>{ques.actor2}</li>
                    <li>{ques.actor3}</li>
                    <li>{ques.actor4}</li>
                    <li>{ques.any()}</li>
                </ol>,
                document.getElementById('root'))