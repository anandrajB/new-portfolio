import Main from './Components/Main'
import Sidenav from './Components/Sidenav'

import React from 'react'
import Work from './Components/Work'
import Project from './Components/Project'
import Testimonals from './Components/Testimonals'
import Footer from './Components/Footer'
import About from './Components/About'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Skills />
      <Work />
      <Project />
      <Testimonals />
      <Footer />

    </div>
  )
}

export default App
