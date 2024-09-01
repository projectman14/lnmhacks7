import React from 'react'
import background from '/Venue-bg.svg'
import LNMIIT from '/LNMIIT.png';
const Location = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat h-[100vh] w-[70vw] 2xl:w-auto 2xl:h-[120vh] bg-transparent overflow-x-hidden"
        >
            <img src={background} className='absolute mt-12 w-[70rem] 2xl:w-auto' />
        </div>
    )
}

export default Location