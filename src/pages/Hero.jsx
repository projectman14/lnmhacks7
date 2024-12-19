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
        <div className="bg-cover bg-center bg-no-repeat max-md:h-[97vh] pb-16 lg:pb-0 lg:h-[100vh] w-screen bg-[#282729] relative overflow-hidden 2xl:max-w-[1536px] 2xl:max-h-[874px] select-none"
            style={{ backgroundImage: `url(${bg_new})` }}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} faqRef={faqRef} scheduleRef={scheduleRef}/>
            </Suspense>
            <div className='flex mx-8 lg:mx-16 max-md:mt-[4rem] mt-8 xl:mt-20 ' id='hero'>
                <div className='w-3/5 flex flex-col'>
                    <h1 className={`text-[#3798D0] font-Minecraft text-[4rem] max-sm:text-[4.35rem] sm:max-md:text-[5.5rem] lg:text-[5rem] xl:text-[7rem] font-medium md:tracking-widest leading-[1] md:leading-normal`}>LNM HACKS</h1>
                    <div className='flex lg:-mt-12'>
                        <h2 className={`text-[#4DC081] font-Minecraft text-[3rem] max-sm:text-[4.75rem] lg:text-[7rem] font-medium tracking-widest`}>X</h2>
                        <h2 className={`text-[#ADFFE1] font-Minecraft text-[3rem] max-sm:text-[4.75rem] lg:text-[7rem] font-medium tracking-widest ml-8`}>CTF</h2>
                    </div>
                    <div>
                        <h3 className='text-[#EE3A23] mt-4 md:mt-0  font-Minecraft text-[3rem] md:text-[4rem] font-medium leading-[1] md:leading-normal tracking-widest animation-opacity animation-blink'>Coming Soon</h3>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TopicButton onClick={openRegistrationForm} text={'Pre-Register Now'} className={'text-lg font-normal tracking-wider ml-8 mt-8 md:mt-4 w-56 cursor-pointer z-10'} />
                    </Suspense>
                </div>
                <div className='flex flex-col w-2/5 items-center '>
                    <div className={`mt-4 hidden xl:flex`}>
                        <img src={BracketLeft} className='h-44' alt="Bracket Left" loading="lazy" />
                        <img src={Coin} className='h-44' alt="Coin" loading="lazy" />
                        <img src={BracketRight} className='-ml-[2.1rem] h-44' alt="Bracket Right" loading="lazy" />
                    </div>
                    <div>
                        <img src={Dinosaur} className='h-[6rem] mt-5 sm:h-56 sm:max-md:mt-[3rem] sm:-mt-4 md:mt-32 max-sm:ml-4 ml-2 md:ml-20' alt="Dinosaur" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero