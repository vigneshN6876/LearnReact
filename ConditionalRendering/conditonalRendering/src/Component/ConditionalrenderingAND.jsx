import React from 'react'

const ConditionalrenderingAND = ({showmessage}) => {
  
  return (
    <div>
        <h1>Conditional rendering using AND operator</h1>
        {showmessage && <h2>This message is shown because the condition is true</h2>}
    </div>
  )
}

export default ConditionalrenderingAND