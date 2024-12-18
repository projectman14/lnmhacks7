import React from 'react'
import background from '/bg.png';
import VenuePc from '../components/VenuePc';
import VenueMob from '../components/VenueMob';
const Venue = ({ venueRef }) => {
    return (
         <div
                className="bg-cover bg-center bg-no-repeat w-screen bg-[#282729] overflow-hidden 2xl:max-w-[1536px] 2xl:max-h-[68rem]"
                style={{ backgroundImage: `url(${background})` }}
                ref={venueRef}
            >

            <div className="hidden xl:block">
                <VenuePc />
            </div>

            <div className="block xl:hidden">
                <VenueMob />
            </div>
                
         </div>
    )
}

export default Venue;