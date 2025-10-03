import React, { useState } from 'react'

const ButtonExample = () => {
    const [clicked , setClicked] = useState(false)
  return (
    <div>
        {
            clicked ? (<p>You clicked th ebutton</p>) 
                    : (<p>click the button</p>)
        }
        <button onClick={() => setClicked(!clicked)}>
            {clicked ? "Reset" : "click Me"}
        </button>
    </div>
  )
}

export default ButtonExample