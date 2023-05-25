import React from "react";
import ReactDom from 'react-dom'
import {sum,sub,mul,div} from './App.jsx'

ReactDom.render(<>
                    <ol>
                        <li>Sum of two number is {sum(45,78)}</li>
                        <li>Subtract of two number is {sub(45,78)}</li>
                        <li>Multiplication of two number is {mul(45,78)}</li>
                        <li>Division of two number is {div(45,78)}</li>
                    </ol>
                </>,
                document.getElementById('root'))