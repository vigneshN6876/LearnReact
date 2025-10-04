import React from 'react'
import Renderingmap from './Component/Renderingmap'
import Conditionalifelse from './Component/Conditionalifelse'
const App = () => {
  return (
    <div>
        <Conditionalifelse ifloggedIn={true} />
      <Renderingmap />
    </div>
  )
}

export default App