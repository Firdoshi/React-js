import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './components/Cards'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>React with tailwind</h1>
     <Cards username= "dada" btnText= 'visit me' />
     <Cards username= "boudi" btnText= 'click me' />
    </>
  )
}

export default App
