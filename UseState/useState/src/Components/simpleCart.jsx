import React, { useState } from 'react'

const simpleCart = () => {
    const [items , setItems] = useState([])
    const [inputValue , setInputValue] = useState("")
    const addtocart = () => {
        if(inputValue === "")return
        setItems([...items , inputValue])
        setInputValue("")
        console.log(items)
    }
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addtocart} >add to cart</button>
    </div>
  )
}

export default simpleCart