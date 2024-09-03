import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin);

const Navbar = ({ aboutRef, ctfRef, venueRef }) => {

  useGSAP(() => {

    gsap.to('.animation-opacity-navbar', {
      opacity: 0,
      duration: 0,
      filter: 'blur(1px)'
    })

    setTimeout(() => {
      const tl = gsap.timeline();
      tl.fromTo('#logo',
        {
          x: window.innerWidth >= 1300 ? 550 : 500,
          y: 650,
          scale: 5,
          opacity: 1,
          filter: 'blur(2px)'
        },
        {
          y: 0,
          duration: 2.5,
          ease: "power1.inOut",
          scale: 1,
          filter: 'blur(0px)'
        }
      );

      tl.to('#logo', {
        x: 0,
        duration: 1
      })

      setTimeout(() => {
        gsap.to('.animation-opacity-navbar', {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.in',
          filter: 'blur(0px)'
        })
      }, 2600)

    }, 2600)
  }, [])

  return (
    <div className='flex flex-col lg:flex-row justify-between mx-4 lg:mx-16'>
      <div className='flex mt-2 opacity-0' id='logo'>
        <h3 className='font-Minecraft text-white font-outline-2 text-4xl 2xl:text-5xl mt-3 2xl:mt-0'>LNM HACKS</h3>
        <h3 className='font-Minecraft text-[#9CFFBE] font-outline-3 text-2xl 2xl:text-3xl ml-2 mt-[1.3rem] 2xl:mt-4'>7.0</h3>
      </div>
      <div className='flex flex-wrap justify-center lg:justify-end items-center animation-opacity-navbar'>
        <p className='font-IBM-PLEX-MONO text-base text-white mt-4 lg:mt-8 cursor-pointer' onClick={() => {
          aboutRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>About</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer'>Schedule</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer' onClick={() => {
          ctfRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>CTF</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer'>Tracks & Prizes</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer'>Our Sponsors</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer'>FAQs</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer' onClick={() => {
          venueRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Venue</p>
      </div>
    </div>
  );
}

export default Navbar;
