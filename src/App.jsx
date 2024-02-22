import { useState } from 'react'
import './App.css'
import Info from './componets/Info'
import About from './componets/About'
import Interest from './componets/Interests'
import Footer from './componets/Footer'

function App() {
  return (
    <div className='container'>
      <Info />
      <div className='main-content'>
        <About />
        <Interest />
      </div>
      <Footer />
    </div>
  )
}

export default App
