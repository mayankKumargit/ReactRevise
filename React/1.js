/*
Babel is a javascript compiler to convert high level javascript like ES6, ES7 to low level javascript
*/

// earlier version use this type of import
//var React=require('react');
//var ReactDOM=require('react-dom')

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));
//ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello World"), document.getElementById('root'));

// JSX -> Javascript extension or XML

// pure javascript
var h1=document.createElement('h1')
h1.innerHTML="Hello World2"
document.getElementById('root').appendChild(h1)


// rendering multiple JSX elements
/* ReactDOM.render(<div><h1>First elements</h1>
                <p>Second paragraph</p>
                <h3>Third paragraph</h3>
              </div>
              ,document.getElementById('main')) */

// It also accept multiple elements as array
ReactDOM.render([ <h1>First elements</h1>,
                  <p>Second paragraph</p>,
                  <h3>Third paragraph</h3>
                ]
              ,document.getElementById('main'))



//ReactDOM.render([/*#__PURE__*/React.createElement("h1", null, "First elements"),
// /*#__PURE__*/React.createElement("p", null, "Second paragraph"),
//  /*#__PURE__*/React.createElement("h3", null, "Third paragraph")], 
//  document.getElementById('main')); 


// React fragments
/*
ReactDOM.render(<div>
                    <h1>First elements</h1>
                    <p>First paragraph</p>
                    <h3>Third heading</h3>
                </div>
              ,document.getElementById('ids')) 
*/
// An extra div is created by using above method to eliminate it we use fragment
/*
ReactDOM.render(<React.Fragment>
                  <h1>First elements</h1>
                  <p>First paragraph</p>
                  <h3>Third heading</h3>
                </React.Fragment>
              ,document.getElementById('ids'))
*/
// Another method of using above
ReactDOM.render(<>
                  <h1>First elements</h1>
                  <p>First paragraph</p>
                  <h3>Third heading</h3>
                </>
              ,document.getElementById('ids'))
          
// We can also use array both are same but fragment are faster and use less memory