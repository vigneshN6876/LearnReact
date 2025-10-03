import React, { useState } from 'react'

const HandlingButton = () => {
    const [msg , setMsg] = useState("Hello")
    const msgfunc = () => {
        setMsg("the button is clicked")
    }
  return (
    <div>
        <p>{msg}</p>
        <button onClick={msgfunc} >click me</button>
    </div>
  )
}

export default HandlingButton