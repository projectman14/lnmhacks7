import React, { useEffect } from 'react';

const Navbar = ({ aboutRef, ctfRef, venueRef, faqRef , scheduleRef}) => {

  return (
    <div className='flex flex-col lg:flex-row justify-between mx-4 lg:mx-16 relative z-10'>
      <div className={`flex mt-2 2xl:mt-8 mx-auto lg:mx-0`} id='logo'>
        <h3 className='font-Minecraft text-white font-outline-2 text-4xl 2xl:text-5xl mt-3 2xl:mt-0'>LNM HACKS</h3>
        <h3 className='font-Minecraft text-[#9CFFBE] font-outline-3 text-2xl 2xl:text-3xl ml-2 mt-[1.3rem] 2xl:mt-4'>7.0</h3>
      </div>
      <div className={`flex-wrap justify-center lg:justify-end items-center animation-opacity-navbar hidden lg:flex`}>
        <p className='font-IBM-PLEX-MONO text-base text-white mt-4 lg:mt-8 cursor-pointer hover:border-b-2 border-[#9CFFBE]' onClick={() => {
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}>About</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer hover:border-b-2 border-[#9CFFBE]' onClick={() => {
          ctfRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}>CTF</p>
         <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer hover:border-b-2 border-[#9CFFBE]' onClick={() => {
          scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}>Schedule</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer hover:border-b-2 border-[#9CFFBE]' onClick={() => {
          faqRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}>FAQs</p>
        <p className='font-IBM-PLEX-MONO text-base text-white ml-4 lg:ml-16 mt-4 lg:mt-8 cursor-pointer hover:border-b-2 border-[#9CFFBE]' onClick={() => {
          venueRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}>Venue</p>
        
        
      </div>
    </div>
  );
}

export default Navbar;
