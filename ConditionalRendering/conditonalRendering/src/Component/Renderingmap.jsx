import React from 'react'

const Renderingmap = () => {
    const mobileBrands = ["samsung" , "apple" , "oneplus" , "xiaomi" , "vivo"]
  return (
    <div>
        <h1>List of mobile brands</h1>
        <ul>
            {mobileBrands.map((brand , index) => (<li key={index} >{brand}</li>))}
        </ul>
    </div>
  )
}

export default Renderingmap