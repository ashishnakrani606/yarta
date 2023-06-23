import React from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import LargestTraders from "components/LargestTraders";
import moneySanityVideo from "assets/Images/woolgrower-main.mp4";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import Herosection from "components/Herosection/Herosection";
import WoolgrowerLeft from "../../assets/Images/eagleal-left.png";
import WoolgrowerRight from "../../assets/Images/documind-right.png";
import Experiance from "components/ExperianceYarta/Experiance";
import Farmers from "components/Encrypted/farmers";
import Traders from "components/Encrypted/Traders";

const Wool = () => {
  const { blockplatform } = Content;
  const { newHome } = Content;
  const { TradeMarket } = Content;
  return (
    <>
      <Herosection
        heading={newHome.agronomyData.heading}
        Knowldge={newHome.agronomyData.knowldge}
        childComp={
          <Typewriter
            options={{
              strings: [
                "wool market",
                "pasture management",
                "soil management",
                "health and welfare",
                "genetics",
                "regen ag",
              ],

              autoStart: true,
              loop: true,
            }}
          />
        }
        content={newHome.agronomyData.subheading4}
        video={moneySanityVideo}
      />
      <LargestTraders  heading={"Trusted by the largest traders around the world"} doller={"From only $69 per person, per month"}/>
      <Powefulltool
        heading={blockplatform.actinable.title}
        content={blockplatform.actinable.subtitle.text}
        content2={blockplatform.actinable.subtitle.text6}
        image={WoolgrowerLeft}
      />
      <OurAltool
        heading={blockplatform.turboCharges.title}
        content={blockplatform.turboCharges.subtitle.text}
        content2={blockplatform.turboCharges.subtitle.text6}
        image={WoolgrowerRight}
      />
     <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white lg:pb-32 md:pb-20 pb-10">
        <Farmers  />
        <Traders  content={TradeMarket.fundamental.desc}
          content2={TradeMarket.fundamental.desc2}
          content3={TradeMarket.fundamental.desc3}
          content4={TradeMarket.fundamental.desc4}
          content5={TradeMarket.fundamental.desc5}
          content6={TradeMarket.fundamental.desc6}/>
      </div>
      <Experiance        
      />
    </>
  );
};

export default Wool;
