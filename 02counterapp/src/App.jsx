import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(0)
// let counter = 15

const incCount = () => {
  if(counter < 20){
    setCounter(counter + 1);
  }
  else{
    setCounter(counter)
  }
  
}
  
const decCount = () => {
  if(counter <= 0){
    setCounter(counter)
  }
  else{
    setCounter(counter - 1);
  }
  
}


  return (
    <>
    <h1>Counter App</h1>
    <p>Count: {counter} </p>
    <button
    onClick={incCount}>Increase: {counter}</button>
    <br />
    <button
    onClick={decCount}>Decrease: {counter}</button>
    </>
  )
}

export default App
