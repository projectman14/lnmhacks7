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

const Ctf = () => {

    useGSAP(() => {
        gsap.from('#ctf-data', {
            x: -300,
            duration: 1.2,
            scrollTrigger: {
                trigger: '#ctf-data',
                start: 'top 82%',
            }
        })

        gsap.from('#assets-ctf', {
            opacity : 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#assets-ctf',
                start: 'top 82%',
            }
        })
    }, [])
    return (
        <div
            className="bg-cover bg-center bg-no-repeat h-screen w-screen bg-[#282729] overflow-hidden"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="flex mx-24 mt-16 justify-between">
                <div className="flex flex-col">
                    <div className="flex  items-center space-x-11">
                        <TopicButton className={'text-xl font-normal tracking-wider'} text={'Topic#3-CTF'} />
                        <img src={flag} className="scale-90 mt-2" />
                    </div>
                    <div className="-ml-5" id='ctf-data'>
                        <div className="text-[#4DC081] font-Handjet text-[3.2rem] font-extrabold mt-[1.5rem] tracking-widest">
                            CTF
                        </div>
                        <div className="flex mt-6 ">
                            <h3 className="text-[#FFFFFF] font-IBM-PLEX-MONO text-[2.01rem] mt-[0.8rem] tracking-wider max-w-[40rem]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="ml-[8rem] -mt-16" id='assets-ctf'>
                    <img
                        src={meteor}
                        className="scale-[0.7] translate-x-[20rem]"
                    />
                    <img
                        src={ctf}
                        className="scale-[0.8] -mt-16 ml-4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Ctf
