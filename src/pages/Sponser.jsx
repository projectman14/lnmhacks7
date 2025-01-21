import React from 'react';
import bg_new from "../../public/bg_new.png";
import leaf from "../../public/leaf.svg";
import SponsorCard from '../components/SponserCard';
import SponsorBtn from '../../public/SponserTitle.svg';
import TopicButton from '../components/TopicButton';
import RiseIn from '/RiseIn.png'
import Jackpot from '/Jackpott.png'
import Devdock from '/devdock.png'


const Sponsor = () => {
    return (
        <div
            className="bg-center max-md:h-[180vh] pb-16 lg:pb-0 lg:h-[100vh]  w-screen bg-[#282729] relative overflow-hidden 2xl:max-w-[1536px] 2xl:max-h-[874px] select-none"
            // className="bg-center bg-repeat pb-16 lg:pb-0 w-screen bg-[#282729] relative overflow-hidden 2xl:max-w-[1536px] select-none"
            style={{ backgroundImage: `url(${bg_new})` }}
        >

            {/* <div className='absolute inset-0 pointer-events-none mx-36'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                </div>
            </div> */}

            <div className='absolute inset-0 pointer-events-none mx-0 overflow-y-scroll max-md:pt-4'>
                <div className='flex justify-around'>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                </div>

                <div className='flex justify-around overflow-y-scroll'>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                        <img src={leaf} className='h-[40vh] opacity-60' alt="" />
                    </div>
                </div>

            </div>

            <div className='relative z-10 pt-16 pb-24'>
                <div className="flex items-center justify-center lg:ml-0 ml-5 max-md:ml-0  mb-8">
                    <TopicButton className={'text-lg md:text-xl font-normal tracking-wider'} text={'Topic#3-Sponsors'} />
                </div>
                <div className='text-center mb-16 flex justify-center'>
                    <img src={SponsorBtn} alt="Sponsor" />
                </div>

                <div className='max-w-7xl mx-auto overflow-y-scroll z-50'>
                    {/* Top row - larger sponsors */}
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'> */}
                        {/* <SponsorCard className={"w-[32rem]"}/>
                        <SponsorCard className={"w-[32rem]"}/> */}
                        {/* <SponsorCard className={"h-[22rem]"} />
                        <SponsorCard className={"h-[22rem]"} />
                    </div> */}

                    {/* Middle row */}
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                        <SponsorCard className={"h-[22rem]"} />
                        <SponsorCard className={"h-[22rem]"} />
                    </div> */}

                    {/* Bottom rows - smaller sponsors */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
                        <SponsorCard className={"h-[18rem]"} src={RiseIn}/>
                        <SponsorCard className={"h-[18rem]"} src={Jackpot}/>
                        <SponsorCard className={"h-[18rem] p-4"} src={Devdock}/>
                    </div>

                    {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <SponsorCard className={"h-[18rem]"} />
                        <SponsorCard className={"h-[18rem]"} />
                        <SponsorCard className={"h-[18rem]"} />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <SponsorCard className={"h-[18rem]"} />
                        <SponsorCard className={"h-[18rem]"} />
                        <SponsorCard className={"h-[18rem]"} />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <SponsorCard className={"h-[16rem]"} />
                        <SponsorCard className={"h-[16rem]"} />
                        <SponsorCard className={"h-[16rem]"} />
                        <SponsorCard className={"h-[16rem]"} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Sponsor;