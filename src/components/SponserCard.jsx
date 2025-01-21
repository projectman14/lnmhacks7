import React from 'react'

const SponserCard = ({className , src}) => {
  return (
    <div className={`border-[#3C9564] border-8 rounded-2xl bg-[#DAF3E5] m-5 flex justify-center items-center ${className}`}>
      <img src={src} />
    </div>
  )
}

export default SponserCard