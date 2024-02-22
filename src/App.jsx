import Main from './Components/Main'
import Sidenav from './Components/Sidenav'

import React from 'react'
import Work from './Components/Work'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
    </div>
  )
}

export default App
