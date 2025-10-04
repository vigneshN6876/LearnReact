import React from 'react'

const Conditionalifelse = ({ifloggedIn}) => {
    let message;
    if(ifloggedIn){
        message = <h1>Welcome to the website</h1>
    } else {
        message = <h1>Please login to continue</h1>
    }
  return (
    <div>
        {message}

    </div>
  )
}

export default Conditionalifelse