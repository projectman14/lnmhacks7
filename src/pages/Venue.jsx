import React from 'react'
import TopicButton from '../components/TopicButton';
import background from '/bg.png';
import Venueimg from '/Venue-img.svg'
import Location from '../components/Location';
import LNMIIT from '/LNMIIT.png';

const Venue = ({ venueRef }) => {
    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat h-[130vh] w-screen bg-[#282729] overflow-hidden 2xl:max-w-[1536px] 2xl:max-h-[864px]"
                style={{ backgroundImage: `url(${background})` }}
                ref={venueRef}
            >
                <div className='flex flex-col mx-24 mt-16'>
                    <div className='flex'>
                        <TopicButton className={'text-xl font-normal tracking-wider h-12'} text={'Topic#4-Venue'} />
                        <img src={Venueimg} className='scale-75 ml-12 -mt-1' />
                    </div>
                    <div className='flex flex-col -ml-4 relative h-[86rem] overflow-hidden' >
                        <div>
                            <h1 className='text-[#4DC081] font-Handjet text-[3rem] font-extrabold mt-[1.5rem] tracking-widest'>Venue</h1>
                        </div>
                        <div className=''>
                            <Location />
                        </div>
                        <div className='absolute z-10 mt-28 ml-12 2xl:mt-40 2xl:ml-32'>
                            <div className='flex items-center justify-between mt-[6rem]  max-w-[70rem] 2xl:max-w-[100rem] 2xl:mx-0 '>
                                <div className='flex flex-col'>
                                    <h1 className='text-[#FFFFFF] font-Handjet font-bold tracking-wider text-[3rem] w-[20rem] leading-[3.1rem] max-w-[25rem]'>THE LNM INSTITUTE OF INFORMATION AND TECHNOLOGY </h1>
                                    <h1 className='text-[#FFFFFF] font-Handjet font-bold tracking-wider text-[3rem] w-[20rem] leading-[3rem] max-w-[25rem] mt-3'>LNMIIT</h1>
                                    <hr className='h-[0.1rem] w-52 bg-white mt-2' />
                                    <h3 className='text-[#818181] text-3xl mt-4 font-Rajdhani max-w-[20rem]'>Rupa ki Nangal, Jaipur, Rajasthan, 302031</h3>
                                    <a href='https://www.google.com/maps/place/The+LNM+Institute+of+Information+Technology/@26.936346,75.923523,16z/data=!4m6!3m5!1s0x396dba21e8a1d1c9:0x5ab565cce4d44c2b!8m2!3d26.9362886!4d75.9234891!16s%2Fm%2F04cql40?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D' className='text-center font-Pixeboy font-[600] text-2xl rounded-xl bg-[#A2D998] w-[10rem] mt-3 ml-28'>DIRECTIONS</a>
                                </div>
                                <img className="h-[23rem] ml-16 w-[40rem] 2xl:w-auto " src={LNMIIT} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Venue;