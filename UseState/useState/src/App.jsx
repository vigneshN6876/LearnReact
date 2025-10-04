import React from 'react'
import { useState } from 'react'
import HandlingInput from './Components/HandlingInput'
import HandlingButton from './Components/HandlingButton'
import ButtonExample from './Components/ButtonExample'
import SimpleCart from './Components/simpleCart'
const App = () => {
  const [count , setCount] = useState(0)
  const counter = () => {
    setCount(count + 1)
  }
  return (
    <div>
      
      <button onClick={counter} >increment</button>
      <p>Counter : {count}</p>
      <button onClick={() =>setCount(count - 1)}>decrement</button>
      <HandlingInput />
      <HandlingButton />
      <ButtonExample />
      <SimpleCart />
    </div>
  )
}

export default App