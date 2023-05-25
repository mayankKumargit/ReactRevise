import React from "react";
import ReactDom from 'react-dom'
import Head from './Heading.jsx'
import Para from './Para.jsx'
import List from './List.jsx'
// React component


// We don't need opening tag

/* ReactDom.render(<>
                    <h1>This is heading</h1>      
                    <p>This is paragraph</p>
                    <ol>
                        <li>list1</li>
                        <li>list2</li>
                        <li>list3</li>
                        <li>list4</li>
                    </ol>
                </>,
                document.getElementById('root')
                ) */

ReactDom.render(<>
                    <Head />      
                    <Para></Para>
                    <List></List>
                </>,
                document.getElementById('root'))