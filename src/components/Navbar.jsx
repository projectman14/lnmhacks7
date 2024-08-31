import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin);

const Navbar = () => {

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
          x: 550,
          y: 650,
          scale: 5,
          opacity: 1,
          filter: 'blur(2px)'
        },
        {
          y: 0,
          duration: 3.5,
          ease: "power1.inOut",
          scale: 1,
          filter: 'blur(0px)'
        }
      );

      tl.to('#logo', {
        x: 0,
        duration: 2
      })

      setTimeout(() => {
        gsap.to('.animation-opacity-navbar', {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.in',
          filter: 'blur(0px)'
        })
      }, 4500)

    }, 3000)
  }, [])
  return (
    <div className='flex justify-between mx-16'>
      <div className='flex mt-2 opacity-0' id='logo'>
        <h3 className='font-Minecraft text-white font-outline-2 text-5xl'>LNM HACKS</h3>
        <h3 className='font-Minecraft text-[#9CFFBE] font-outline-3 text-3xl ml-2 mt-4'>7.0</h3>
      </div>
      <div className='flex animation-opacity-navbar'>
        <p className='font-IBM-PLEX-MONO text-base text-white mt-8 cursor-pointer'>About</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-16 mt-8 cursor-pointer'>Schedule</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-16 mt-8 cursor-pointer'>CTF</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-16 mt-8 cursor-pointer'>Tracks & Prizes</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-16 mt-8 cursor-pointer'>Our Sponsors</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-16 mt-8 cursor-pointer'>FAQs</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-16 mt-8 cursor-pointer'>Venue</p>
      </div>
    </div>
  )
}

export default Navbar