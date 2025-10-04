import React from 'react'

const ConditionalRenderingTernary = ({isTrue}) => {
  return (
    <div>
        {isTrue ? <h1>The condition is true using Ternary operator</h1> : <h1>The condition is false using ternary operator</h1>}
    </div>
  )
}

export default ConditionalRenderingTernary