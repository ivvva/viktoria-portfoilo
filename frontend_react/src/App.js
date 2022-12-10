import React from 'react'
import { About, Footer, Skills, Header, Work, Links } from './container'
//import { Navbar } from './components'


const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Skills />
      <Work />
      <Links />
      <Footer />
    </div>
  )
}

export default App