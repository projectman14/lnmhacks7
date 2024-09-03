import React from 'react'
import Aboutimg from '../../public/GreenDiamond.svg';
import TopicButton from '../components/TopicButton';
import AboutImg1 from '../../public/AboutImg1.svg';
import background from '../../public/bg.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = ({aboutRef}) => {

    useGSAP(() => {
        // gsap.from('#about-data', {
        //     x: -300,
        //     duration: 1.2,
        //     scrollTrigger: {
        //         trigger: '#about-data',
        //         start: 'top 82%',
        //     }
        // })

        gsap.from('#asset-about-diamond', {
            opacity : 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#about-data',
                start: 'top 82%',
            }
        })
    }, [])
    return (
        <div className="bg-cover bg-center bg-no-repeat h-screen w-screen bg-[#282729] overflow-hidden"
            style={{ backgroundImage: `url(${background})` }}
            ref={aboutRef}>
            <div className='flex  mx-[6rem] mt-12 '>
                <div className='flex flex-col '>
                    <div className='flex mt-[2rem]'>
                        <TopicButton className={'text-xl font-normal tracking-wider h-12'} text={'Topic#1-About'} />
                        <img src={AboutImg1} className='ml-[4rem] h-16 -mt-[0.2rem]' />
                    </div>
                    <div className='flex flex-col max-w-[48rem] -ml-5' id='about-data'>
                        <h1 className='text-[#4DC081] font-Handjet text-[3rem] font-extrabold mt-[1.5rem] tracking-widest'>About LNM hacks</h1>
                        <h3 className='text-[#FFFFFF] font-IBM-PLEX-MONO text-[2rem] mt-[1.5rem] tracking-wide'>Prepare for an innovation extravaganza at LNM Hacks, the focal point of Tech-Fest, Plinth! Dive into the <span className='text-[#4DC081]'> 48-hour </span> excitement of LNMHacks 7.0, where coding novices and seasoned pros come together for a transformative journey. Unleash your genius and shape your coding evolution!</h3>
                    </div>

                </div>
                <div className={`flex items-center h-full mt-[7rem] ml-36 ${window.screen.width >= 1300 ? '' : 'mt-[11rem]'}`} id='asset-about-diamond'>
                    <img className='hover:scale-105 hover:transform hover:rotate-6 transition-transform duration-500 ease-in-out' src={Aboutimg}/>
                </div>
            </div>
        </div>
    )
}

export default About;
