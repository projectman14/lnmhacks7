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
import Sponser from './pages/Sponser'
import Tracks from './pages/Tracks'
import Judges from './pages/Judges'
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
          <title>LNMHacks</title>
          <meta name="description" content="LNMHacks , the ultimate 72-hour hackathon at Tech-Fest Plinth! Collaborate, innovate, and transform ideas into reality as coding enthusiasts from all levels come together. Unleash your potential and shape the future of technology at LNM Institute of Information Technology. Don’t miss out—register now!" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Helmet>
        <Hero aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} faqRef={faqRef} scheduleRef={scheduleRef} />
        <About aboutRef={aboutRef} />
        <Ctf ctfRef={ctfRef} />
        {/* <Tracks /> */}
        <Sponser/>
        <Judges />
        <Schedule scheduleRef={scheduleRef} />
        <Faq faqRef={faqRef} />
        <Venue venueRef={venueRef} />
        <Footer aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} faqRef={faqRef} scheduleRef={scheduleRef} />
      </div>
    </div>
  )
}

export default App