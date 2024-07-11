import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <div>
        Counter {counter}
        <br />
        <button onClick={() => {
          setCounter(counter + 1)
        }}>INCREASE</button>
        
        <button onClick={() => {
          setCounter(counter - 1)
        }}>DECREASE</button>
      </div>
    </>
  )
}

export default App
