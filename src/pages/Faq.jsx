import React, { useState } from 'react';
import Faqc from '../components/Faqc';
import Query from '../components/Query';
const Faq = ({ faqRef }) => {

    return (
        <div ref={faqRef} className="bg-cover bg-center bg-no-repeat lg:py-[0rem] xl:p-[0rem] xl:h-[120vh] w-screen bg-[#282729] relative overflow-hidden max-w-[1536px] 2xl:max-h-[864px]">
         <div className="hidden sm:block">
                <Faqc />
            </div>

            <div className="block sm:hidden">
                <Query />
            </div>
        </div>
    );
};

export default Faq;