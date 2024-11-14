import React from 'react'
import background from "../../public/bg.png";
import TopicButton from "../components/TopicButton";
import flag from "../../public/flag.png";
import ctf from "../../public/ctf.png";
import meteor from "../../public/meteor.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Ctf = ({ ctfRef }) => {

    useGSAP(() => {

        gsap.from('#assets-ctf', {
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#assets-ctf',
                start: 'top 82%',
            }
        })
    }, [])
    return (
        <div
            className="bg-cover bg-center bg-no-repeat h-[110vh] w-screen bg-[#282729] overflow-hidden max-w-[1536px] 2xl:max-h-[864px] select-none"
            style={{ backgroundImage: `url(${background})` }}
            ref={ctfRef}
        >
            <div className="flex mx-24 mt-16 justify-between">
                <div className="flex flex-col">
                    <div className="flex  items-center space-x-11">
                        <TopicButton className={'text-xl font-normal tracking-wider'} text={'Topic#2-CTF'} />
                        <img src={flag} className="scale-90 mt-2" onClick={()=>window.open("https://ctf.lnmhacks7.tech", "_blank")}/>
                    </div>
                    <div className="-ml-5" id='ctf-data'>
                        <div className="text-[#4DC081] font-Handjet text-[3.2rem] font-extrabold mt-[1.5rem] tracking-widest">
                            CTF
                        </div>
                        <div className="flex mt-6">
                            <h3 className="text-[#FFFFFF] font-IBM-PLEX-MONO text-[2.01rem] mt-[0.8rem] tracking-wider max-w-[52rem]">
                                Building on the remarkable success of last year, which saw over 350 teams and more than 800 participants from 6 countries and with a prize pool of INR 20,000 last year, we aim to raise the stakes this time around.
                                Our mission is to engage beginners and challenge seasoned veterans alike with innovative questions.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={`ml-[8rem] ${window.screen.width >= 1300 ? '' : 'max-w-[20rem]'}`} id='assets-ctf'>
                    <img
                        src={meteor}
                        className={`scale-[0.7] translate-x-[20rem] ${window.screen.width >= 1300 ? '' : 'translate-x-[7rem] translate-y-[2rem]'}`}
                    />
                    <img
                        src={ctf}
                        className={`scale-[0.8] -mt-16 ml-4 ${window.screen.width >= 1300 ? '' : 'mt-4 translate-x-[-3rem] scale-110'}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Ctf
