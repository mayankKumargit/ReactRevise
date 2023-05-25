import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA=()=>{
    const [num,setNum]=useState()
    const [name,setName]=useState()
    const [move,setMove]=useState()
    const [moveName,setMoveName]=useState()

    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res)
            console.log(res.data.name)
            setName(res.data.name)
            setMove(res.data.moves.length)
            setMoveName(res.data.moves[0].move.name)
            console.log('print')
        }
        getData()
    })

    return ( 
        <>
            <h1>You choose {num} value</h1>
            <h1>My name is <span style={{color:'red'}}>{name} </span></h1>
            <h1>I have <span style={{color:'red'}}>{move}</span> moves</h1>
            <h1>I have <span style={{color:'red'}}>{moveName}</span> move</h1>
            <select onChange={(event)=>{
                setNum(event.target.value)
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default ComA