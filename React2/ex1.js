import React from "react";
import ReactDom from 'react-dom'
import App from './App.jsx'
import './index.css'


ReactDom.render(<App></App>,document.getElementById('root'))
//ReactDom.render(<>{App()}</>,document.getElementById('root'))
//ReactDom.render(<div>{App()}</div>,document.getElementById('root'))