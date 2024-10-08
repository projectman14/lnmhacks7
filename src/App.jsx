import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Ctf from './pages/Ctf'
import Venue from './pages/Venue'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Helmet } from 'react-helmet';
import Faq from './pages/Faq'
gsap.registerPlugin(useGSAP);

function App() {

  const aboutRef = useRef(null);
  const ctfRef = useRef(null);
  const venueRef = useRef(null);
  const faqRef = useRef(null);

  useGSAP(() => {
    setTimeout(() => {
      gsap.to('.Containts', {
        display: 'block',
        duration: 0
      })
    }, 7500)
  }, [])

  return (
    <div className='overflow-x-hidden Scrollbar'>
      <Helmet>
        <title>LNMHacks 7.0</title>
        <meta name="description" content="Welcome to the official home page of LnmHacks 6.0" />
      </Helmet>
      <Hero aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} faqRef={faqRef}/>
      <About aboutRef={aboutRef} />
      <Ctf ctfRef={ctfRef} />
      <Venue venueRef={venueRef} />
      <Faq faqRef={faqRef}/>
    </div>
  )
}

export default App
