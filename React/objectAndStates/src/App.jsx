import { useState } from 'react'
import './App.css'
import TodoList  from './TodoList';

function App() {
let[moves , setMoves] = useState({blue:0 , yellow:0 , red:0 , green:0});

function updateBlue(){
  setMoves((preVal)=>{
    return {...preVal , blue:preVal.blue+1}
  })
} 

function updateYellow(){
  setMoves((preVal)=>{
    return {...preVal , yellow:preVal.yellow+1}
  })
} 

function updateRed(){
  setMoves((preVal)=>{
    return {...preVal , red:preVal.red+1}
  })
} 

function updateGreen(){
  setMoves((preVal)=>{
    return {...preVal , green:preVal.green+1}
  })
} 

  return (

    <>
    {/* <p>Blue-Moves = {moves.blue} </p>
    <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button> 
    <p>Yellow-Moves = {moves.yellow} </p>
    <button style={{backgroundColor:"yellow" , color:"black"}} onClick={updateYellow}>+1</button> 
    <p>Red-Moves = {moves.red}</p>
    <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button> 
    <p>Green-Moves = {moves.green} </p>
    <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>  */}
<TodoList/>
    </>
  )
}

export default App
