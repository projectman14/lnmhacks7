import React, { useState } from "react";
import background from "../../public/bg.png";
import TopicButton from "./TopicButton";
import experiment from "../../public/experiment.svg";
import faqBg from "../../public/faq.svg";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";
import toast, { Toaster } from "react-hot-toast";

const Query = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [query, setQuery] = useState();
  const [btnStatus, setBtnStatus] = useState("SUBMIT");

  const submitQuery = async () => {
    const payload = {
      name,
      email,
      query,
    };

    console.log(payload);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name == "" || email == "" || query == "") {
        toast.error("Feilds Incomplete");
        return;
      }

      if (!emailRegex.test(email)) {
        toast.error("Invalid email format");
        return;
      }

      setBtnStatus("SUBMITTING");
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL,
        payload
      );
      console.log(response);

      if (response.data.success == true) {
        toast.success(response?.data?.message);
        setEmail("");
        setName("");
        setQuery("");
        setBtnStatus("SUBMITED✅");
        setTimeout(() => {
          setBtnStatus("SUBMIT");
        }, 1000);
      } else {
        setBtnStatus("SUBMIT");
      }
    } catch (err) {
      console.log(err);
      setBtnStatus("SUBMIT");
      setEmail("");
      setName("");
      setQuery("");
      toast.error("SOME ERROR OCCURRED");
    }
  };
  return (
    <div
      className="bg-center bg-repeat lg:py-[2rem] xl:p-[0rem] xl:h-[110vh] w-screen bg-[#282729] relative overflow-hidden max-w-[1536px] 2xl:max-h-[864px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex-col xl:flex xl:flex-row xl:justify-between mx-24 mt-8">
        <div className="flex flex-col">
          <div className="mt-16 -ml-12 flex">
            <TopicButton
              className={"text-lg max-sm:text-[0.8rem] md:text-xl font-normal tracking-wider h-12 w-48 max-sm:w-40"}
              text={"Topic#6-FAQS"}
            />
            <img
              src={experiment}
              alt="Experiment icon"
              className="max-sm:ml-[2.2rem] ml-[2.8rem] md:ml-[4rem] h-16 -mt-[0.2rem]"
            />
          </div>
          <div className="flex -ml-16 w-[100vw]">
            <h1 className="text-[#4DC081] font-Handjet text-[1.8rem] font-extrabold mt-[1.5rem] tracking-widest">
              Ask Your Queries
            </h1>
            
          </div>
          <div className="ml-[-6rem]">
            <img
              src={faqBg}
              alt="FAQ background"
              className="absolute scale-90"
            />
            <div className="relative flex flex-col mt-20 z-10 ml-10">
              <div>
                <h3 className="font-Public-sans font-medium">Name</h3>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg bg-transparent mt-[0.1rem] border-[1px] border-black h-6 w-[18rem] font-IBM-PLEX-MONO pl-2"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-Public-sans font-medium">Email</h3>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg bg-transparent mt-[0.1rem] border-[1px] border-black h-6 w-[18rem] font-IBM-PLEX-MONO pl-2"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-Public-sans font-medium">
                  Questions/Query
                </h3>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="rounded-xl bg-transparent border-[1px] mt-[0.1rem] border-black h-12 w-[18rem] font-IBM-PLEX-MONO pl-2 pt-2"
                />
              </div>
              <div className="mt-2 flex justify-end -mr-7 pb-4">
                <button
                  className="rounded-md bg-[#4DC081] h-8 w-[7.5rem] font-Minecraft text-lg pb-1"
                  onClick={submitQuery}
                >
                  {btnStatus}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-36  xl:ml-28 ml-7">
        <div>
          <h3 className="text-white font-Minecraft text-xl max-w-72">
            FREQUENTLY ASKED QUESTIONS
          </h3>
        </div>
        <div className="text-[#CFE7CD] font-Public-sans w-[20rem] mt-6">
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base">
                1. Can I participate remotely?
              </AccordionTrigger>
              <AccordionContent>
                LNM Hacks is an in-person hackathon. So remote participation is
                not applicable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base">
                2. I'm a beginner, can I participate?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely, along with several workshops targeted for beginners
                we have mentors and resources. Come learn and experience your
                first hackathon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base">
                3. Will you support or reimburse our travel expense?
              </AccordionTrigger>
              <AccordionContent>
                LNM hacks is a community hackathon, so unfortunately we would
                not be able to support you with travel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base">
                4. How much does it cost to participate?
              </AccordionTrigger>
              <AccordionContent>
                Nothing, participation in LNM hacks is absolutely FREE!!🎉 We'll
                have meals, snacks, and beverages onsite at the hackathon, in
                addition to swags, prizes, fun mini-events and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base">
                5. What is the maximum team size? Can I participate as a solo
                hacker?
              </AccordionTrigger>
              <AccordionContent>
                We encourage you to make a team of minimum 2 and maximum 4
                members. If you are a Solo Hacker and do not have a team, you
                can still register and we will help you find a team during the
                hackathon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base">
                6. What are sleeping arrangements?
              </AccordionTrigger>
              <AccordionContent>
                We will have a supervised sleeping space for you to rest and
                sleep at the venue. We recommend bringing your own blanket if
                you need one.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-base">
                7. My parents/guardians will come along with me, can they stay
                at venue?
              </AccordionTrigger>
              <AccordionContent>
                The answer is No. Arrangements like sleeping area, food, etc.,
                are only for the attendees. We recommend you to find a stay
                option for them near the venue. They can drop you at the
                hackathon venue on 19th Jan and can pick you on 21st Jan but
                cannot stay at venue during the hackathon as we do not have any
                provision for them.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Query;
