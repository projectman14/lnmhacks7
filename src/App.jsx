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
import Schedule from './pages/Schedule'
import Footer from './pages/Footer'
gsap.registerPlugin(useGSAP);

function App() {
  console.log(window.screen.width);
  console.log(window.screen.height);

  const aboutRef = useRef(null);
  const ctfRef = useRef(null);
  const venueRef = useRef(null);
  const faqRef = useRef(null);
  const scheduleRef = useRef(null);

  useGSAP(() => {
    setTimeout(() => {
      gsap.to('.Containts', {
        display: 'block',
        duration: 0
      })
    }, 7500)
  }, [])

  return (
    <div className="bg-black min-h-screen flex justify-center">
      <div className="w-full max-w-[1536px] overflow-x-hidden Scrollbar">
        <Helmet>
          <title>LNMHacks 7.0</title>
          <meta name="description" content="Join LNMHacks 7.0, the ultimate 72-hour hackathon at Tech-Fest Plinth! Collaborate, innovate, and transform ideas into reality as coding enthusiasts from all levels come together. Unleash your potential and shape the future of technology at LNM Institute of Information Technology. Don’t miss out—register now!" />
          <link rel="icon" type="image/png" sizes="32x32" href="public/logoUpdated.png?v=1" />
        </Helmet>
        <Hero aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} faqRef={faqRef} scheduleRef={scheduleRef} />
        <About aboutRef={aboutRef} />
        <Ctf ctfRef={ctfRef} />
        <Schedule scheduleRef={scheduleRef} />
        <Faq faqRef={faqRef} />
        <Venue venueRef={venueRef} />
        <Footer aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} faqRef={faqRef} scheduleRef={scheduleRef} />
      </div>
    </div>
  )
}

export default App