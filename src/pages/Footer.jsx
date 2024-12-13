import React from 'react'
import hackslogo from '/lnmhackslogo.svg'
import xLogo from '/TwitterX.svg'
import gmailLogo from '/Mail.svg'
import fackbookLogo from '/Facebook.svg'
import linkedinLogo from '/LinkedIn.svg'

const Footer = ({ aboutRef, ctfRef, venueRef, faqRef, scheduleRef }) => {

  const handleImageClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (href) => {
    window.open(
      `mailto:${href}`,
      '_blank'
    );
  }

  return (
    <div className='flex flex-col'>
      <div className='h-[42vh] w-screen flex justify-between bg-[#3C9564] pt-[3rem] px-[5rem]'>
        <div className='flex flex-col'>
          <img src={hackslogo} className='size-[5rem]' />
          <h3 className='font-Pixeboy text-white text-5xl mt-3 tracking-[0.05em] select-none'>LNM HACKS 7.0</h3>
          <div className='mt-3 flex -ml-[0.25rem]'>
            <img src={xLogo} className='mr-4 size-[2.5rem] select-none cursor-pointer' onClick={()=>{handleImageClick('https://x.com/LNMHacks')}}/>
            <img src={linkedinLogo} className='mr-4 size-[2.5rem] select-none cursor-pointer' onClick={() => {handleImageClick('https://www.linkedin.com/company/lnmhacks7')}} />
            <img src={gmailLogo} className='mr-4 size-[2.5rem] select-none cursor-pointer' onClick={()=>{handleEmailClick('team@lnmhacks.xyz')}}/>
            <img src={fackbookLogo} className='mr-4 size-[2.5rem] select-none cursor-pointer' onClick={()=>{handleImageClick('https://www.facebook.com/lnmhacks')}}/>
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex font-Futura-Black underline text-white text-2xl flex-row-reverse'>
            <h3 className='mr-4 tracking-wide cursor-pointer select-none'  onClick={()=>window.open("https://ctf.lnmhacks7.tech", "_blank")}>CTF</h3>
            <h3 className='mr-4 tracking-wide cursor-pointer select-none' onClick={() => {
              scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>Schedule</h3>
            <h3 className='mr-4 tracking-wide cursor-pointer select-none' onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>About</h3>
          </div>
          <div className='flex font-Futura-Black underline text-white text-2xl flex-row-reverse mt-2'>
            <h3 className='mr-4 tracking-wide cursor-pointer select-none'>Tracks & Prizes</h3>
          </div>
          <div className='flex font-Futura-Black underline text-white text-2xl flex-row-reverse mt-2'>
            <h3 className='mr-4 tracking-wide cursor-pointer select-none' onClick={() => {
              venueRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>Venue</h3>
            <h3 className='mr-4 tracking-wide cursor-pointer select-none' onClick={() => {
              faqRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>FAQs</h3>
            <h3 className='mr-4 tracking-wide cursor-pointer select-none'>Our Sponsors</h3>
          </div>
        </div>
      </div>
      <div className='bg-[#282729] h-[5.5rem] flex flex-col items-center pt-1 text-2xl tracking-wider'>
        <h3 className='font-Pixeboy text-white'>Designed by the love of : Dhruv Doshi, Adwitiya Vivek, Akshat Singh, Adtiya Karanwal</h3>
        <h3 className='font-Pixeboy text-white mt-1'>Developed by the love of : Lakshya Jain, Naman Khandelwal, Pranshu Saxena, Manan Singhal , Harshit Nayan</h3>
      </div>
    </div>
  )
}

export default Footer