import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Ctf from './pages/Ctf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <About />
      <Ctf/>
    </div>
  )
}

export default App
