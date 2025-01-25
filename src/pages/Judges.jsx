import React from 'react';
import bg_new from "../../public/bg_new.png";
import JudgeBtn from '../../public/JudgeBtn.svg';
import TopicButton from '../components/TopicButton';
import layout from '../../public/layout.svg';
import naman from "../../public/naman.svg";
import shubham from "../../public/shu.png";

const judgesData = [
  {
    name: "NAMAN BHALLA",
    image: "../../public/naman.svg",
    title: "HEAD, PRODUCT AT SCALER.",
    subtitle: "PREV SOFTWARE ENGINEER-",
    company: "GOOGLE"
  },
  {
    name: "SHUBHAM DHIMAN",
    image: "../../public/shu.png",
    title: "FOUNDER, CALMCLOVE",
    subtitle: "PREV. SOFTWARE ENGINEER-",
    company: "GOOGLE"
  }
];

const JudgeCard = ({ judge , src}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Name Header */}
      <h2 className="text-3xl font-bold mb-4 tracking-wide text-yellow-200 
        [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] font-Eight-Bit-Dragon">
        {judge.name}
      </h2>

      {/* Profile Card */}
      <div className="relative w-full max-w-sm">
        {/* Content */}
        <div className=" rounded-lg p-6 relative">
          {/* Profile Image */}
          <div 
            className="aspect-[4/3] mb-6 overflow-hidden rounded-lg relative bg-black"
            style={{ 
              backgroundImage: `url(${layout})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '2rem'
            }}
          >
            <img 
              src={src}
              alt={judge.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Title Card */}
          <div className="rounded-lg p-4 text-center relative bg-[#cbffe5] border-[1rem] border-[#3C9564]">      
            <div className="text-black font-Pixeboy space-y-1 text-2xl tracking-wide">
              <p>{judge.title}</p>
              <p>{judge.subtitle}</p>
              <p>{judge.company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Judges = () => {
  return (
    <div
      className="bg-center min-h-screen pb-16 lg:pb-0 w-screen bg-[#282729] relative overflow-hidden 2xl:max-w-[1536px] select-none"
      style={{ backgroundImage: `url(${bg_new})` }}
    >
      <div className='relative z-10 pt-16 pb-24'>
        {/* Topic Button */}
        <div className="flex items-center justify-center lg:ml-0 ml-5 max-md:ml-0 mb-8">
          <TopicButton 
            className={'text-lg md:text-xl font-normal tracking-wider'} 
            text={'Topic#4-Judges'} 
          />
        </div>

        {/* Judges Title */}
        <div className='text-center mb-16 flex justify-center'>
          <img src={JudgeBtn} alt="Judges" className="h-12" />
        </div>

        {/* Judges Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
            {judgesData.map((judge, index) => (
              <JudgeCard key={index} judge={judge} src={index==0 ? naman : shubham}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;