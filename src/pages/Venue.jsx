import React from "react";
import TopicButton from "../components/TopicButton";
import background from "/bg.png";
import Venueimg from "/Venue-img.svg";
import Location from "../components/Location";
import LNMIIT from "/LNMIIT.png";
import backgroundVenue from "/Venue-bg.svg";

const Venue = ({ venueRef }) => {
  return (
    <>
      <div
        className=" bg-no-repeat w-screen h-auto bg-[#282729] overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
        ref={venueRef}
      >
        <div className="flex flex-col mx-6 md:mx-12 lg:mx-24 mt-8 md:mt-12 lg:mt-16">
          {/* Header Section */}
          <div className="flex items-center flex-wrap">
            <TopicButton
              className="text-base md:text-xl font-normal tracking-wider h-10 md:h-12"
              text={"Topic#5-Venue"}
            />
            <img
              src={Venueimg}
              className="scale-50 md:scale-75 ml-4 md:ml-12 -mt-1"
              alt="Venue Icon"
            />
          </div>

          {/* Venue Section */}
          <div className="flex flex-col relative mt-4 md:mt-8">
            <div>
              <h1 className="text-[#4DC081] font-Handjet text-2xl md:text-4xl font-extrabold mt-4 md:mt-6 tracking-widest">
                Venue
              </h1>
            </div>

            {/* Main Content */}
            <div className="relative  bg-[url('/Venue-bg.svg')] bg-cover bg-no-repeat bg-center my-4">
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 lg:space-x-8">
                  {/* Text Section */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left z-10 pb-4 lg:pb-0">
                    <h1 className="text-white font-Handjet font-bold tracking-wider text-2xl md:text-3xl lg:text-4xl leading-[2.5rem] md:leading-[3rem] max-w-full">
                      THE LNM INSTITUTE OF INFORMATION AND TECHNOLOGY
                    </h1>
                    <h1 className="text-white font-Handjet font-bold tracking-wider text-2xl md:text-3xl lg:text-4xl mt-3">
                      LNMIIT
                    </h1>
                    <hr className="h-[0.1rem] w-32 md:w-52 bg-white mt-2 mx-auto lg:mx-0" />
                    <h3 className="text-[#818181] text-lg md:text-2xl mt-4 font-Rajdhani max-w-full">
                      Rupa ki Nangal, Jaipur, Rajasthan, 302031
                    </h3>
                    <div className="flex justify-center lg:justify-start mt-3">
                      <a
                        href="https://www.google.com/maps/place/The+LNM+Institute+of+Information+Technology/@26.936346,75.923523,16z/data=!4m6!3m5!1s0x396dba21e8a1d1c9:0x5ab565cce4d44c2b!8m2!3d26.9362886!4d75.9234891!16s%2Fm%2F04cql40?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                        className="text-center font-Pixeboy font-[600] text-sm md:text-xl rounded-xl bg-[#A2D998] px-4 py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DIRECTIONS
                      </a>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 flex justify-center z-10">
                    <img
                      className="max-w-[90%] lg:max-w-[70%] h-auto object-contain"
                      src={LNMIIT}
                      alt="LNMIIT"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venue;
