import React, { useState } from 'react'

const ButtonExample = () => {
  const [clicked , setclicked] = useState(false)
  return (
    <div>
    {
      clicked ? <h1> you have clicked the button</h1>
              : <h1>Click the button below</h1>
    }
    <button onClick={() => setclicked(!clicked)} >{clicked ? "Reset" : "Click me"}</button>
    </div>
  )
}

export default ButtonExample