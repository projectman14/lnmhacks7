import React from 'react'
import Navbar from '../components/Navbar'
import background from '../../public/bg.png'
import TopicButton from '../components/TopicButton'
import BracketLeft from '../../public/bracket_left.png'
import Coin from '../../public/coin.png'
import BracketRight from '../../public/bracket_right.png'
import Dinosaur from '../../public/dinosaur.svg'
import Rocket from '../../public/Rocket.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin);

const Hero = ({ aboutRef, ctfRef, venueRef }) => {

    useGSAP(() => {

        const tl = gsap.timeline();

        gsap.to('.animation-opacity', {
            opacity: 0,
            duration: 0
        })

        tl.to("#rocket", {
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
            },
            duration: 3,
            ease: "power1.inOut",
            rotation: "-=45",
        });

        tl.to("#rocket", {
            y: "-=500",
            rotation: "-10",
            opacity: 0,
            duration: 2,
            ease: "power1.in",
            display: 'none'
        });

        setTimeout(() => {
            tl.to(".animation-opacity", {
                opacity: 1,
                duration: 0.25,
                ease: "power1.in"
            })


            tl.to(".path-rocket-div", {
                display: 'none',
                duration: 0
            })

            tl.to('.animation-blink', {
                opacity: 0, 
                duration: 0.6, 
                repeat: -1,    
                yoyo: true,      
                ease: 'power1.inOut'  
            });
        }, 7500)
    }, [])

    return (
        <div className="bg-cover bg-center bg-no-repeat h-screen w-screen bg-[#282729] relative overflow-hidden"
            style={{ backgroundImage: `url(${background})` }}>
            <Navbar aboutRef={aboutRef} ctfRef={ctfRef} venueRef={venueRef} />
            <div className='flex mx-16 mt-20' id='hero'>
                <div className='w-3/5 flex flex-col'>
                    <h3 className='text-[#3798D0] font-Minecraft text-[7rem] font-medium tracking-widest animation-opacity'>LNM HACKS</h3>
                    <div className='flex -mt-12'>
                        <h3 className='text-[#4DC081] font-Minecraft text-[7rem] font-medium tracking-widest animation-opacity'>X</h3>
                        <h3 className='text-[#ADFFE1] font-Minecraft text-[7rem] font-medium tracking-widest ml-8 animation-opacity'>CTF</h3>
                    </div>
                    <div>
                        <h3 className='text-[#EE3A23] font-Minecraft text-[4rem] font-medium tracking-widest animation-opacity animation-blink'>Coming Soon</h3>
                    </div>
                    <div className='flex mx-6 mt-4'>
                        {/* <TopicButton className={'text-xl font-normal tracking-wider animation-opacity'} text={'Learn more'} />
                        <TopicButton className={'text-xl font-normal tracking-wider ml-16 pr-8 animation-opacity'} text={`Media`} />
                        <TopicButton className={'text-xl font-normal tracking-wider ml-16  animation-opacity'} text={`Careers`} /> */}
                    </div>
                    <div id='rocket'>
                        <img src={Rocket} />
                    </div>
                </div>
                <div className='flex flex-col w-2/5 items-center animation-opacity'>
                    <div className='flex mt-4'>
                        <img src={BracketLeft} className='h-44' />
                        <img src={Coin} className='h-44' />
                        <img src={BracketRight} className='-ml-[2.1rem] h-44' />
                    </div>

                    <div>
                        <img src={Dinosaur} className='h-56 mt-32 ml-20' />
                    </div>
                </div>
            </div>

            <div className='absolute top-0 h-[10rem] opacity-0 path-rocket-div -ml-40 2xl:ml-0 '>
                <svg width="1500" height="700" viewBox="0 0 1478 1976" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id='path' d="M1 1975C1449.4 1270.2 1563.17 365.333 1439 1" stroke="white" />
                </svg>
            </div>
        </div>
    )
}

export default Hero