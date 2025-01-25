import React from 'react'

const TracksCard = ({className, src, bounty}) => {
  return (
    <div className="relative">
      {/* Price Box */}
      <div className="absolute top-[-3rem] left-1/2 -translate-x-1/2 z-10">
        <div className="bg-[#42A56E] text-white px-6 py-1 border-[0.6rem] border-black font-Pixeboy text-[3rem] tracking-[1.5rem]">
          ${bounty}
        </div>
      </div>

      <div className={`border-[#3C9564] border-8 rounded-2xl bg-[#DAF3E5] m-5 flex justify-center items-center ${className}`}>
        <img src={src} />
      </div>
    </div>
  )
}

export default TracksCard