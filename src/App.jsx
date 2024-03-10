import Main from './Components/Main'
import Sidenav from './Components/Sidenav'

import React from 'react'
import Work from './Components/Work'
import Pr from './Components/Pr'
import Testimonals from './Components/Testimonals'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Pr />
      <Testimonals />
      <Footer />
    </div>
  )
}

export default App
