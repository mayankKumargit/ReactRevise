import React, { useState } from "react";
import {questions} from "./questions"
import MyAccordion from './MyAccordion'

const Accordion=()=>{
    const [data,setData]=useState(questions)
    return(
        <>
            <section className="main-div">
                <h1>React Interview Questions</h1>
                {
                    data.map((currElement)=>{
                        const {id}=currElement
                        console.log(id)
                        return <MyAccordion key={id} {...currElement}></MyAccordion>
                    })
                }
            </section>
        </>
    )
}

export default Accordion