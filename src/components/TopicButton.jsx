import React from 'react'

const TopicButton = ({ text , className}) => {
    return (
        <div className={`text-[#CFE7CD] font-IBM-PLEX-MONO font-bold bg-[#282728] border-[2px] border-[#CFE7CD] p-2 scale-125 shadow-[12px_11px_0_rgba(0,0,0,1)] ${className}`}>
            {text}
        </div>
    )
}

export default TopicButton