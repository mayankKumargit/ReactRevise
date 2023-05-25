import React from 'react'
import ReactDom from 'react-dom'

// JSX expression in React
/*
we use html inside javascript using JSX and we use javascript inside html using JSX expression{}
we cannot use statement like if, if-else, for loop etc
*/
let firstName='Mayank'
let lastName='Kumar'
ReactDom.render(<>
                  <h1>my first name is {firstName}</h1>
                  <h1>My full name is {firstName + " " + lastName}</h1>
                  <h2>Sum of 5+6 is {5+6} and product of 5*6 is {5*6}</h2>
                  <h3>Random number is {Math.floor((Math.random()*6+1))}</h3>
                </>,
                  document.getElementById('root'))



// How to use Template Literal in JSX in React
ReactDom.render(<>
                  <h1>{`My name is ${firstName} ${lastName}`}</h1>
                  <h1>{`To use curly braces {}`}</h1>
                  <p>{`Sum of 3+4 is ${3+4}`}</p>
                </>,
                  document.getElementById('main')
                )

let todayDate=new Date()
let currentTime=new Date()
ReactDom.render(<>
                <h1>{`Today local machine date is ${todayDate.toLocaleDateString()}`}</h1>
                <h1>{`Current local machine time is ${currentTime.toLocaleTimeString()}`}</h1>
                <h1>{`${todayDate.getDate()}`}</h1>
                </>,
                document.getElementById('ids'))