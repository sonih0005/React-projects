
import { useState } from 'react'
import './App.css'

function App() {
 const[count, setCount] =  useState(0);
 function addCount(){
  // setCount(count+1)
  // setCount(count+1)
  // setCount(count+1)
  // setCount(count+1)
  setCount(prevCount => prevCount +1)
  setCount(prevCount => prevCount +1)
  setCount(prevCount => prevCount +1)
  setCount(prevCount => prevCount +1)
 }
 function subsCount(){
  setCount(prevCount => prevCount-1)
  setCount(prevCount => prevCount-1)
  setCount(prevCount => prevCount-1)
  setCount(prevCount => prevCount-1)
  
 }

  return (
    <>
    <h1>hello: {count} </h1>
    <h2>count: {count}</h2>
    <button onClick={addCount}>Add</button>
    <button onClick={subsCount}>subs</button>
    </>
  )
}

export default App
