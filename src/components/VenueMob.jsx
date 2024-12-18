import React from 'react'
import TopicButton from './TopicButton';
import background from '/bg.png';
import Venueimg from '/Venue-img.svg'
import LNMIIT from '/LNMIIT.png';

const VenueMob = () => {
    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat w-screen bg-[#282729] overflow-hidden 2xl:max-w-[1536px] 2xl:max-h-[68rem] -mb-[20rem] md:-mb-[40rem]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='flex flex-col pl-10 mt-16'>
                    <div className='flex'>
                        <TopicButton className={'text-lg font-normal tracking-wider h-12'} text={'Topic#5-Venue'} />
                        <img src={Venueimg} className='scale-75 ml-12 -mt-1' />
                    </div>
                    <div className='flex flex-col -ml-4 relative h-[86rem] overflow-hidden' >
                        <div>
                            <h1 className='text-[#4DC081] font-Handjet text-[3rem] font-extrabold mt-[1.5rem] tracking-widest'>Venue</h1>
                        </div>
                        <div className='ml-[0rem] 2xl:ml-[2rem]'>
                            {/* <Location /> */}
                        </div>
                        <div className='absolute z-10 mt-28 2xl:mt-40 2xl:ml-[9.5rem] px-6 pb-6 border-[#A2D998] border-8 rounded-xl bg-[#161617] w-[90vw]'>
                            <div className='flex flex-col md:flex-row items-center justify-between mt-[6rem]  max-w-[70rem] 2xl:max-w-[100rem] 2xl:mx-0 '>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-[#FFFFFF] font-Handjet text-center font-bold tracking-wider text-[2.5rem] max-w-[25rem]'>THE LNM INSTITUTE OF INFORMATION AND TECHNOLOGY </h1>
                                    <h1 className='text-[#FFFFFF] font-Handjet text-center font-bold tracking-wider text-[2.5rem] w-[20rem] leading-[3rem] max-w-[25rem] mt-3'>LNMIIT</h1>
                                    <hr className='h-[0.1rem] w-52 bg-white mt-2' />
                                    <h3 className='text-[#818181] text-2xl mt-4 font-Rajdhani text-center max-w-[20rem]'>Rupa ki Nangal, Jaipur, Rajasthan, 302031</h3>
                                    <a href='https://www.google.com/maps/place/The+LNM+Institute+of+Information+Technology/@26.936346,75.923523,16z/data=!4m6!3m5!1s0x396dba21e8a1d1c9:0x5ab565cce4d44c2b!8m2!3d26.9362886!4d75.9234891!16s%2Fm%2F04cql40?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D' className='text-center font-Pixeboy font-[600] text-2xl rounded-xl bg-[#A2D998] w-[10rem] mt-3'>DIRECTIONS</a>
                                </div>
                                <img className='pt-12 md:w-[20rem] md:h-[20rem] md:-mt-[4rem] md:ml-[1rem] lg:w-[30rem] lg:h-[20rem] lg:-mt-[5.5rem]' src={LNMIIT} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VenueMob;