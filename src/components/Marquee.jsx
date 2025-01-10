import React from 'react';
import FastMarquee from 'react-fast-marquee';

const Marquee = ({ text }) => {
  return (
    <FastMarquee
      className=" text-white font-bold text-lg px-40 py-1 font-IBM-PLEX-MONO"
      speed={200}
    >
      {Array(7)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className="whitespace-nowrap after:content-['//'] after:text-[#FFEA80] after:ml-2"
          >
            {`\u00a0 ${text} \u00a0 `}
          </span>
        ))}
    </FastMarquee>
  );
};

export default Marquee;
