import React from 'react'
import ReactDom from 'react-dom'
import './4.css'

// Adding CSS to React
// We can not use class because class is a reserved word for making class
let src1='https://picsum.photos/200/300'
let src2='https://picsum.photos/250/300'
let src3='https://picsum.photos/300/300'

ReactDom.render(<>
                    <h1 className='h1'>My name is mayank kumar</h1>
                    <div className='imgDiv'>
                        <img src={src1} alt='randomImage' title='beautifulImage'></img>
                        <img src={src2} alt='randomImage'></img>
                        <a href='https://picsum.photos/' target='_blank'>
                            <img src={src3} alt='randomImage'></img>
                        </a>
                    </div>
                </>,
                    document.getElementById('root')
                )