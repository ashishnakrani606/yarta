import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import { Link } from "react-router-dom";
import moneySanityVideo from "./../../assets/Images/eagle-main.mp4";
import bluePlay from "assets/Images/blue-play.svg";
import LargestTraders from "components/LargestTraders";
import FaqDropdown from "components/FaqDropdown/FaqDropdown";
import Farmers from "components/Encrypted/farmers";
import Pricingbilling from "components/PricingBill/PricingBill";
import Traders from "components/Encrypted/Traders";
import MoneyVideo from "assets/Images/moneySanityVideo.mp4";

const Pricing = () => {
  const { FaqQuestion } = Content;
  const [expanded, setExpanded] = useState<false | number>(-1);
  const { TradeMarket } = Content;  
  const { newHomeMission } = Content;

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  return (
    <>
      <div className="bg-black-darkest w-full h-full text-white relative bg-purplegrident overflow-hidden">
        <div className="text-center xl:py-40 md:py-20 py-16">
          <h2 className="text-4xl lg:text-6xl md:text-5xl font-semibold pt-4 tracking-[-0.02em] !leading-tight">
            Pricing plans
          </h2>
          <p className="md:pt-7 pt-5 md:text-2xl text-base font-medium w-full mx-auto text-center pb-3">
            Simple, transparent pricing. Try the platform free for 7 days.
          </p>
        </div>
      </div>
      <div className="relative z-[99] -mt-16">
      <Pricingbilling />
      </div>

      <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white ">
        <Farmers  />
        <Traders  content={TradeMarket.fundamental.desc}
          content2={TradeMarket.fundamental.desc2}
          content3={TradeMarket.fundamental.desc3}
          content4={TradeMarket.fundamental.desc4}
          content5={TradeMarket.fundamental.desc5}
          content6={TradeMarket.fundamental.desc6}/>
      </div>

      <div className="wrapper">
        <div className="bg-black-darkest w-full lg:pt-[115px] md:pt-16 pt-14 text-white">
          <h2 className="lg:text-[64px] md:text-5xl text-3xl text-white  text-center font-bold ">
            {newHomeMission.title2}
          </h2>
          <div className="flex flex-col w-full items-center justify-center lg:pb-[100px] max-w-[725px] mx-auto md:pb-16 pb-12">
            <p className="text-white-sixty lg:text-2xl md:text-xl text-lg md:mt-8 mt-5 text-center ">
              {newHomeMission.subtitle}
            </p>
            <p className="text-white-sixty lg:text-2xl md:text-xl text-lg md:mt-8 mt-4 text-center ">
              {newHomeMission.description.text}
              <Link
                to={newHomeMission.description.linkUrl}
                className="font-bold"
              >
                {newHomeMission.description.link}
              </Link>
            </p>
          </div>
          <div className="relative">
            <video
              src={moneySanityVideo}
              width="100%"
              className="rounded-md "
              autoPlay
              loop
              muted                  
            >
            </video>           
          </div>
        </div>
      </div>
      <LargestTraders
        heading="Trusted by the largest traders around the world"
        doller="From only $69 per person, per month"
        className={"!mb-0"}
      />
      <div className="bg-darkest px-4">
        <div className="text-white text-center lg:pt-24 md:pt-12 lg:pb-16 md:pb-10 py-10">
          <h2 className="md:pb-[30px] pb-4 lg:text-[56px] md:text-4xl text-2xl font-semibold leading-none">
            Frequently asked questions
          </h2>
          <p className="text-[#FFFFFFB2] lg:text-2xl md:text-xl text-base">
          Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="flex-col w-full md:max-w-[768px] max-w-[490px] mx-auto lg:mb-24 md:mb-20 sm:mb-14 mb-10">
          {FaqQuestion.Basics.map((question,  key) => (
            <FaqDropdown
              arrow={false}
              key={key}
              header={question.title}
              subtitle={question.subtitle}
              i={key}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
