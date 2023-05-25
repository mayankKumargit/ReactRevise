import React from 'react'
import ReactDom from 'react-dom'

// JSX Attributes
// Global attributes are contentEditable

let src1='https://picsum.photos/200/300'
let src2='https://picsum.photos/250/300'
let src3='https://picsum.photos/300/300'

ReactDom.render(<>
					<h1 contentEditable='true'>this is first heading</h1>
					<img src={src1} alt='randomImage' title='beautifulImage'></img>
					<img src={src2} alt='randomImage'></img>
					<a href='https://picsum.photos/' target='_blank'>
						<img src={src3} alt='randomImage'></img>
					</a>
                </>,
                 	document.getElementById('root')
                )