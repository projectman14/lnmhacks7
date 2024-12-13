import React, { lazy, Suspense } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = lazy(() => import('../components/Navbar'))
const TopicButton = lazy(() => import('../components/TopicButton'))

import background from '../../public/bg.png'
import BracketLeft from '../../public/bracket_left.png'
import Coin from '../../public/coin.png'
import BracketRight from '../../public/bracket_right.png'
import Dinosaur from '../../public/dinosaur.svg'
import bg_new from '../../public/bg_new.png'

gsap.registerPlugin(useGSAP)

const Hero = ({ aboutRef, ctfRef, venueRef, faqRef , scheduleRef }) => {
    useGSAP(() => {
        gsap.to('.animation-blink', {
            opacity: 0,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        })
    }, [])

    const openRegistrationForm = (event) => {
        event.preventDefault()
        window.open(import.meta.env.VITE_REGISTRATION_URL, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-screen bg-[#282729] relative overflow-hidden 2xl:max-w-[1536px] 2xl:max-h-[874px] select-none"
            style={{ backgroundImage: `url(${bg_new})` }}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} faqRef={faqRef} scheduleRef={scheduleRef}/>
            </Suspense>
            <div className='flex mx-16 mt-20' id='hero'>
                <div className='w-3/5 flex flex-col'>
                    <h1 className='text-[#3798D0] font-Minecraft text-[7rem] font-medium tracking-widest animation-opacity'>LNM HACKS</h1>
                    <div className='flex -mt-12'>
                        <h2 className='text-[#4DC081] font-Minecraft text-[7rem] font-medium tracking-widest animation-opacity'>X</h2>
                        <h2 className='text-[#ADFFE1] font-Minecraft text-[7rem] font-medium tracking-widest ml-8 animation-opacity'>CTF</h2>
                    </div>
                    <div>
                        <h3 className='text-[#EE3A23] font-Minecraft text-[4rem] font-medium tracking-widest animation-opacity animation-blink'>Coming Soon</h3>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TopicButton onClick={openRegistrationForm} text={'Pre-Register Now'} className={'text-lg font-normal tracking-wider ml-8 mt-4 w-56 cursor-pointer z-10'} />
                    </Suspense>
                </div>
                <div className='flex flex-col w-2/5 items-center animation-opacity'>
                    <div className='flex mt-4'>
                        <img src={BracketLeft} className='h-44' alt="Bracket Left" loading="lazy" />
                        <img src={Coin} className='h-44' alt="Coin" loading="lazy" />
                        <img src={BracketRight} className='-ml-[2.1rem] h-44' alt="Bracket Right" loading="lazy" />
                    </div>
                    <div>
                        <img src={Dinosaur} className='h-56 mt-32 ml-20' alt="Dinosaur" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero