import React, { useState , useEffect } from 'react'

const simpleCart = () => {
    const [items , setItems] = useState([])
    const [inputValue , setInputValue] = useState("")
    const addtocart = () => {
        if(inputValue === "")return
        setItems([...items , inputValue])
        setInputValue("")
    }
    useEffect(() => {
        console.log(items);
    },[items])
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addtocart} >add to cart</button>
    </div>
  )
}

export default simpleCart