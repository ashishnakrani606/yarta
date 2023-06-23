import React from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import LargestTraders from "components/LargestTraders";
import moneySanityVideo from "assets/Images/eagle-main.mp4";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import Herosection from "components/Herosection/Herosection";
import EthanolusLeft from "../../assets/Images/eagleal-left.png";
import EthanolusRight from "../../assets/Images/documind-right.png";
import Experiance from "components/ExperianceYarta/Experiance";
import Farmers from "components/Encrypted/farmers";
import Traders from "components/Encrypted/Traders";

const EthanolUs = () => {
  const { blockplatform } = Content;
  const { newHome } = Content;
  const { TradeMarket } = Content; 

  return (
    <>
      <Herosection
        heading={newHome.agronomyData.heading}
        Knowldge={newHome.agronomyData.knowldge2}      
        childComp={
          <Typewriter
            options={{
              strings: [
                "ethanol market",
                "DDG market",
                "corn market",
                "USDA report",
                "global weather",
                "market news",
              ],

              autoStart: true,
              loop: true,
            }}
          />
        }
        content={newHome.agronomyData.subheading11}
        video={moneySanityVideo}
      />
      <LargestTraders  heading={"Trusted by the largest traders around the world"} doller={"From only $69 per person, per month"}/>
      <Powefulltool
        heading={blockplatform.actinable.title2}
        content={blockplatform.actinable.subtitle.text11}
        content2={blockplatform.actinable.subtitle.text14}
        image={EthanolusLeft}
      />
      <OurAltool
        heading={blockplatform.turboCharges.title2}
        content={blockplatform.turboCharges.subtitle.text11}
        content2={blockplatform.turboCharges.subtitle.text12}
        image={EthanolusRight}
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
      <Experiance />
    </>
  );
};

export default EthanolUs;
