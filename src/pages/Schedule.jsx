import React, { useState } from 'react'
import background from '../../public/bg.png'
import TopicButton from '../components/TopicButton'
import schedule from '../../public/schedule.png'
import days from '../../public/Days.png'

const Schedule = ({scheduleRef}) => {

    const [events, setEvents] = useState([{ name: "Registration Start", time: "9:00" }, { name: "OPENING CEREMONY", time: "9:45" }, { name: "Idea Sketching", time: "12:00" }, { name: "LUNCH", time: "13:30" }, { name: "Progress Tracking", time: "17:30" }, { name: "DINNER", time: "21:00" }])
    const Day1 = [{ name: "Registration Start", time: "9:00" }, { name: "OPENING CEREMONY", time: "9:45" }, { name: "Idea Sketching", time: "12:00" }, { name: "LUNCH", time: "13:30" }, { name: "Progress Tracking", time: "17:30" }, { name: "DINNER", time: "21:00" }]
    const Day2 = [{name : "Breakfast" , time : "8:00"} , {name : "Blockchain Workshop", time : "11:30"} , {name : "Lunch" , time : "2:00"} , {name : "1O1 Networking" , time : "18:00"} , {name : "Team Bonding Session" , time : "19:00"} , {name : "Dinner" , time : "20:30"} , {name : "Meme Quiz" , time : "21:40"}]
    const Day3 = [{name : "Breakfast" , time : "8:00"} , {name : " Speaker Talk", time : "10:00"} , {name : "Submission Process" , time : "11:00"} , {name : "Submission Deadline" , time : "2:00"} , {name : "Swag Distribution" , time : "16:00"} , {name : "Closing Ceremony" , time : "17:00"}]
    const [selectedDay , setSelectedDay] = useState(1);
    return (
        <div className="bg-cover bg-center bg-no-repeat h-[120vh] w-screen bg-[#282729] overflow-hidden max-w-[1536px] 2xl:max-h-[890px] select-none"
            style={{ backgroundImage: `url(${background})` }}
            ref={scheduleRef}
        >
            <div className='mx-24 flex flex-col'>
                <div className='mt-16 ml-3'>
                    <TopicButton className={'text-xl font-normal tracking-wider h-12 w-64'} text={'Topic#3-Schedule'} />
                </div>
                <div className='mt-4 -ml-5'>
                    <h1 className='text-[#4DC081] font-Handjet text-[3rem] font-extrabold mt-[1.5rem] tracking-widest'>Schedule</h1>
                </div>
                <div className='-mt-[8rem] -ml-12 h-[50rem] w-[70rem]'
                    style={{ backgroundImage: `url(${schedule})` }}
                >
                    <div className='flex flex-col'>
                        <div className='flex mt-[14.4rem] z-10 ml-28'>
                            <h3 className='font-Pixeboy text-[1.7rem]  cursor-pointer'>HACKS</h3>
                            <h3 className='font-Pixeboy text-[1.7rem] ml-7 font-extralight cursor-pointer'>GOT</h3>
                            <h3 className='font-Pixeboy text-[1.7rem] ml-7 font-extralight cursor-pointer'>IT</h3>
                            <h3 className='font-Pixeboy text-[1.7rem] ml-7 font-extralight cursor-pointer'>COVERED</h3>
                        </div>
                        <div className='flex'>
                            <div>
                                <div className='z-10 h-[19.5rem] w-[17.4rem] mt-20 ml-32 flex flex-col' style={{ backgroundImage: `url(${days})`, backgroundRepeat: 'no-repeat' }}>
                                    <div className='mx-auto mt-4 text-center select-none'>
                                        <h3 className={`font-Pixeboy text-7xl font-medium cursor-pointer hover:scale-105 ${selectedDay == 1 ? 'text-[#4DC081]' : 'text-white'}`} onClick={()=> {setEvents(Day1) ;setSelectedDay(1)}}>DAY-1</h3>
                                        <hr className='mt-4' />
                                        <h3 className={`font-Pixeboy text-7xl font-medium mt-4 cursor-pointer hover:scale-105 ${selectedDay == 2 ? 'text-[#4DC081]' : 'text-white'}`} onClick={()=> {setSelectedDay(2) ; setEvents(Day2)}}>DAY-2</h3>
                                        <hr className='mt-4' />
                                        <h3 className={`font-Pixeboy text-7xl font-medium mt-4 cursor-pointer hover:scale-105 ${selectedDay == 3 ? 'text-[#4DC081]' : 'text-white'}`} onClick={()=> {setSelectedDay(3) ; setEvents(Day3)}}>DAY-3</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col my-10 ml-16 h-[26rem] overflow-y-scroll">
                                {events.map((event, index) => (
                                    <div key={index} className="flex justify-between -mt-[1.5rem] w-[34rem] select-none">
                                        <h3 className={`font-Pixeboy text-[3.25rem] text-white font-medium text-transform:uppercase ${events[1].name == Day2[1].name ?'text-[3rem]' :''}`}>{event.name}</h3>
                                        <h3 className="font-Pixeboy text-[3.25rem] text-white font-medium">{event.time}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule