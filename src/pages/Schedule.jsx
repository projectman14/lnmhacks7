import React, { useState } from 'react'
import background from '../../public/bg.png'
import TopicButton from '../components/TopicButton'
import schedule from '../../public/schedule.png'
import days from '../../public/Days.png'

const Schedule = ({ scheduleRef }) => {

    const [events, setEvents] = useState([{ name: "Registration Start", time: "9:00" }, { name: "OPENING CEREMONY", time: "9:45" }, { name: "Idea Sketching", time: "12:00" }, { name: "LUNCH", time: "13:30" }, { name: "Progress Tracking", time: "17:30" }, { name: "DINNER", time: "21:00" }])
    const Day1 = [{ name: "Registration Start", time: "9:00" }, { name: "OPENING CEREMONY", time: "9:45" }, { name: "Idea Sketching", time: "12:00" }, { name: "LUNCH", time: "13:30" }, { name: "Progress Tracking", time: "17:30" }, { name: "DINNER", time: "21:00" }]
    const Day2 = [{ name: "Breakfast", time: "8:00" }, { name: "Blockchain Workshop", time: "11:30" }, { name: "Lunch", time: "2:00" }, { name: "1O1 Networking", time: "18:00" }, { name: "Team Bonding Session", time: "19:00" }, { name: "Dinner", time: "20:30" }, { name: "Meme Quiz", time: "21:40" }]
    const Day3 = [{ name: "Breakfast", time: "8:00" }, { name: " Speaker Talk", time: "10:00" }, { name: "Submission Process", time: "11:00" }, { name: "Submission Deadline", time: "2:00" }, { name: "Swag Distribution", time: "16:00" }, { name: "Closing Ceremony", time: "17:00" }]
    const [selectedDay, setSelectedDay] = useState(1);

    const setEventsInResponsive = (clicked) => {
        console.log("Hello");
        let Day = 0;
        if (clicked == "Next") {
            Day = selectedDay + 1;
            setSelectedDay(Day);
        }else{
            Day = selectedDay - 1;
            setSelectedDay(Day);
        }

        if (Day == 1) {
            setEvents(Day1);
        } else if (Day == 2) {
            setEvents(Day2);
        } else {
            setEvents(Day3);
        }
    }
    return (
        <div className="bg-cover bg-center bg-no-repeat md:h-[140vh] xl:h-[120vh] w-screen bg-[#282729] overflow-hidden max-w-[1536px] 2xl:max-h-[890px] select-none"
            style={{ backgroundImage: `url(${background})` }}
            ref={scheduleRef}
        >
            <div className='mx-[2rem] lg:mx-24 flex flex-col'>
                <div className='mt-16 ml-5 lg:ml-3'>
                    <TopicButton className={'text-lg md:text-xl font-normal tracking-wider h-12 w-64'} text={'Topic#3-Schedule'} />
                </div>
                <div className='mt-4 lg:-ml-5'>
                    <h1 className='text-[#4DC081] font-Handjet lg:text-[3rem] font-extrabold mt-[1.5rem] tracking-widest text-[2.5rem] lg:pb-[0.25rem]'>Schedule</h1>
                </div>
                <div className='-mt-[8rem] -ml-12 h-[50rem] w-[70rem] '
                    style={{ backgroundImage: `url(${schedule})` }}
                >
                    <div className='flex flex-col'>
                        <div className='flex mt-[14.4rem] z-10 ml-28 max-xl:invisible'>
                            <h3 className='font-Pixeboy text-[1.7rem]  '>HACKS</h3>
                            <h3 className='font-Pixeboy text-[1.7rem] ml-7 font-extralight '>GOT</h3>
                            <h3 className='font-Pixeboy text-[1.7rem] ml-7 font-extralight '>IT</h3>
                            <h3 className='font-Pixeboy text-[1.7rem] ml-7 font-extralight '>COVERED</h3>
                        </div>
                        <div className='flex'>
                            <div className='max-xl:hidden'>
                                <div className='z-10 h-[19.5rem] w-[17.4rem] mt-20 ml-32 flex flex-col' style={{ backgroundImage: `url(${days})`, backgroundRepeat: 'no-repeat' }}>
                                    <div className='mx-auto mt-4 text-center select-none'>
                                        <h3 className={`font-Pixeboy text-7xl font-medium cursor-pointer hover:scale-105 ${selectedDay == 1 ? 'text-[#4DC081]' : 'text-white'}`} onClick={() => { setEvents(Day1); setSelectedDay(1) }}>DAY-1</h3>
                                        <hr className='mt-4' />
                                        <h3 className={`font-Pixeboy text-7xl font-medium mt-4 cursor-pointer hover:scale-105 ${selectedDay == 2 ? 'text-[#4DC081]' : 'text-white'}`} onClick={() => { setSelectedDay(2); setEvents(Day2) }}>DAY-2</h3>
                                        <hr className='mt-4' />
                                        <h3 className={`font-Pixeboy text-7xl font-medium mt-4 cursor-pointer hover:scale-105 ${selectedDay == 3 ? 'text-[#4DC081]' : 'text-white'}`} onClick={() => { setSelectedDay(3); setEvents(Day3) }}>DAY-3</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col my-10 ml-16 h-[26rem] overflow-y-scroll max-xl:ml-[6rem] md:mx-[11rem]">
                                {events.map((event, index) => (
                                    <div key={index} className="flex max-sm:justify-start justify-between -mt-[1.5rem] w-[34rem] select-none">
                                        <h3 className={`font-Pixeboy max-xl:text-[2rem] max-sm:w-[13rem] max-sm:text-[1.5rem] max-xl:mt-6 max-xl:font-extralight max-sm:leading-[1.5] max-xl:leading-[1.3] text-[3.25rem] text-white font-medium text-transform:uppercase ${events[1].name == Day2[1].name ? 'text-[3rem] max-sm:text-[1rem]' : ''}`}>{event.name}</h3>
                                        <h3 className="font-Pixeboy max-xl:text-[2rem] max-sm:ml-[3rem] max-sm:text-[1.5rem] max-xl:mt-6 max-xl:font-extralight max-sm:leading-[1.5] max-xl:leading-[1.3] text-[3.25rem] text-white font-medium">{event.time}</h3>
                                    </div>
                                ))}
                                <div className={`flex xl:hidden ${selectedDay == 2 ? 'mt-[1.95rem] max-sm:-mt-[0.5rem]' : 'mt-16'} md:mx-auto`}>
                                    <button className={`rounded-full flex justify-center items-center bg-[#4DC081] font-Pixeboy pt-[0.25rem] text-4xl text-white h-[3rem] w-[3rem] mt-[2rem] xl:hidden ${selectedDay == 1 ? 'invisible' : 'visible'}`} onClick={() => { setEventsInResponsive("Prev") }}>←</button>
                                    <h3 className='text-white font-Pixeboy text-[2.7rem] mt-[1.6rem] ml-[3.5rem]'>Day {selectedDay}</h3>
                                    <button className={`rounded-full flex justify-center items-center bg-[#4DC081] font-Pixeboy pt-[0.25rem] text-4xl text-white h-[3rem] w-[3rem] mt-[2rem] xl:hidden ml-[2.5rem] cursor-pointer z-10 ${selectedDay == 3 ? 'invisible' : 'visible'}`} onClick={() => { setEventsInResponsive("Next") }}>→</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule