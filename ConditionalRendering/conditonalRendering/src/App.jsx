import React from 'react'
import Renderingmap from './Component/Renderingmap'
import Conditionalifelse from './Component/Conditionalifelse'
import ConditionalrenderingAND from './Component/ConditionalrenderingAND'
import ConditionalRenderingTernary from './Component/ConditionalRenderingTernary'
import ListAndCondition from './Component/ListAndCondition'
const App = () => {
  return (
    <div>
        <Conditionalifelse ifloggedIn={true} />
        <hr />
        <ConditionalrenderingAND showmessage={true} />
        <hr />
        <ConditionalRenderingTernary isTrue={true} />
        <hr />
        <ListAndCondition />
        <hr />
      <Renderingmap />
    </div>
  )
}

export default App