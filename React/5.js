import React from 'react'
import ReactDom from 'react-dom'

// Adding CSS to React
// We can not use class because class is a reserved word for making class
let src1='https://picsum.photos/200/300'
let src2='https://picsum.photos/250/300'
let src3='https://picsum.photos/300/300'


// To use inline and internal css we have to take reference css as objects
/* .h1{
  text-align: center;
  color: rgb(2, 36, 57);
  margin: 40px 0;
  text-transform: capitalize;
  font-weight: bold;
  text-shadow: 0px 2px 3px rgb(250, 10, 130);
  font-family: 'Cookie', cursive;
  font-family: 'Cormorant Garamond', serif;
  font-family: 'Inconsolata', monospace;
  font-family: 'Playfair Display', serif;
  font-family: 'Roboto Condensed', sans-serif;
  font-family: 'Ubuntu', sans-serif;
} */
/* const h1 = {
    textAlign: 'center',
    color: 'rgb(2, 36, 57)',
    margin: '40px 0',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 3px rgb(250, 10, 130)',
    fontFamily: 'Cookie, cursive',
} */

let imgDiv={
  display: 'flex',
  justifyContent: 'space-evenly'
  
}
ReactDom.render(<>
                    <h1 style={{
                                textAlign: 'center',
                                color: 'rgb(2, 36, 57)',
                                margin: '40px 0',
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                textShadow: '0px 2px 3px rgb(250, 10, 130)',
                                fontFamily: 'Cookie, cursive',
                            }}>My name is mayank kumar
                    </h1>
                    <div style={imgDiv} className='imgDiv'>
                        <img src={src1} alt='randomImage' title='beautifulImage' style={{ width: '300px', height: '300px' }}></img>
                        <img src={src2} alt='randomImage' style={{ width: '300px', height: '300px' }}></img>
                        <a href='https://picsum.photos/' target='_blank'>
                            <img src={src3} alt='randomImage' style={{ width: '300px', height: '300px' }}></img>
                        </a>
                    </div>    
                </>,
                    document.getElementById('root')
                )