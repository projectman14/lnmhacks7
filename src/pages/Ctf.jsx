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
            className="bg-cover bg-center bg-no-repeat lg:h-[112vh] w-screen bg-[#282729] overflow-hidden max-w-[1536px] 2xl:max-h-[864px] select-none"
            style={{ backgroundImage: `url(${background})` }}
            ref={ctfRef}
        >
            <div className="flex flex-col lg:flex-row lg:mx-[6rem] mt-8 mx-[2rem]">
                <div className="flex flex-col">
                    <div className="flex items-center mt-4 lg:ml-0 ml-5">
                        <TopicButton className={'text-lg md:text-xl font-normal tracking-wider'} text={'Topic#2-CTF'} />
                        <img src={flag} className="ml-9 md:ml-[4rem] h-12 md:h-16 -mt-[0.2rem] cursor-pointer" onClick={() => window.open("https://ctf.lnmhacks7.tech", "_blank")} />
                    </div>
                    <div className="flex flex-col lg:max-w-[64rem] xl:max-w-[48rem] lg:-ml-5" id='ctf-data'>
                        <h1 className="text-[#4DC081] font-Handjet lg:text-[3rem] font-extrabold mt-[1.5rem] tracking-widest text-[2.5rem]">
                            CTF
                        </h1>

                        <h2 className="text-[#FFFFFF] font-IBM-PLEX-MONO lg:text-[1.6rem] xl-[1.9rem] mt-[1.5rem] tracking-wide text-[1.35rem]">
                            Building on the remarkable success of last year, which saw over 350 teams and more than 800 participants from 6 countries and with a prize pool of INR 20,000 last year, we aim to raise the stakes this time around.
                            Our mission is to engage beginners and challenge seasoned veterans alike with innovative questions.
                        </h2>
                    </div>
                </div>
                <div
                    className={`ml-[8rem] hidden lg:block`}
                    id='assets-ctf'
                >
                    <img
                        src={meteor}
                        className={`scale-[0.7] translate-x-[20rem] invisible xl:visible`}
                    />
                    <img
                        src={ctf}
                        className={`scale-[0.8] -mt-16 ml-4 `}
                    />
                </div>

            </div>
        </div>
    )
}

export default Ctf