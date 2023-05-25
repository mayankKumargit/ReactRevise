import React from "react";
import ReactDom from 'react-dom'
import './index.css'

let hr = new Date();
hr=hr.getHours()
let greeting
let greetCss={}
if (hr >= 1 && hr <= 11) {
    greeting = 'Good morning'
    greetCss.color='rgb(13, 123, 103)'
}
else if (hr >= 12 && hr <= 15) {
    greeting = 'Good afternoon'
    greetCss.color='rgb(227, 197, 128)'
}
else if (hr >= 16 && hr <= 19) {
    greeting = 'Good evening'
    greetCss.color='rgb(209, 22, 78)'
}
else {
    greeting = 'Good night'
    greetCss.color='rgb(56, 25, 233)'
}
ReactDom.render(<>
                    <h1>Hello sir/madam, <span style={greetCss}>{greeting}</span></h1>
                </>,
                document.getElementById('root')
                )