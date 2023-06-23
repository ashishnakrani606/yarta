import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import moneySanityVideo from "assets/Images/eagle-main.mp4";
import LargestTraders from "components/LargestTraders";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import Herosection from "components/Herosection/Herosection";
import EgleLeft from "../../assets/Images/eagleal-left.png";  
import EgleRight from "../../assets/Images/egle-al-right.png"; 
import Experiance from "components/ExperianceYarta/Experiance";
import Farmers from "components/Encrypted/farmers";
import Traders from "components/Encrypted/Traders";
const EagleAI = () => {
  const { blockplatform } = Content;
  const { newHome } = Content;
  const { TradeMarket } = Content;
  
  return (
    <>
      <Herosection
        heading={newHome.tradeDirect.heading}
        className={'!max-w-[727px]'}
        childComp={
          <Typewriter
            options={{
              strings: [
                "global grain traders",
                "grain farmers",
                "livestock traders",
                "cattle farmers",
                "livestock farmers",
                "grain farmers",
              ],

              autoStart: true,
              loop: true,
            }}
          />
        }
        content={newHome.tradeDirect.subheading}
        video={moneySanityVideo}
      />
      
      <LargestTraders
        heading={"Trusted by the largest traders around the world"}
        doller={"From only $69 per person, per month"}
      />

      <Powefulltool
        heading={blockplatform.tradeDays.title}
        content={blockplatform.tradeDays.subtitle.text}
        content2={blockplatform.tradeDays.subtitle.text2}
        image={EgleLeft}
      />
      <OurAltool
        heading={blockplatform.turboCharge.title2}
        content={blockplatform.turboCharge.subtitle.text2}
        content2={blockplatform.turboCharge.subtitle.text3}
        image={EgleRight}
      />
      <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white lg:pb-32 md:pb-20 pb-10">
        <Farmers content={" with one easy to use platform."} />
        <Traders
          content={TradeMarket.fundamental.desc}
          content2={TradeMarket.fundamental.desc2}
          content3={TradeMarket.fundamental.desc3}
          content4={TradeMarket.fundamental.desc4}
          content5={TradeMarket.fundamental.desc5}
          content6={TradeMarket.fundamental.desc6}
        />
      </div>
      <Experiance />       
    </>
  );
};

export default EagleAI;
