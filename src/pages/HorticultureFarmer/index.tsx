import React from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import LargestTraders from "components/LargestTraders";
import moneySanityVideo from "assets/Images/money-sanity-video.png";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import Herosection from "components/Herosection/Herosection";
import dashboardLending from "../../assets/Images/platformdash.png";
import Experiance from "components/ExperianceYarta/Experiance";
import Farmers from "components/Encrypted/farmers";
import Traders from "components/Encrypted/Traders";
const HorticultureFarmer = () => {
  const { blockplatform } = Content;
  const { TradeMarket } = Content;
  const { newHome } = Content;

  return (
    <>
      <Herosection
      stylename="darkpink-gradient w-full rounded-[20px] lg:p-[60px] md:p-8 p-5 md:pb-0 pb-0 pad-bottom-set"
        heading={newHome.agronomyData.heading}
        Knowldge={newHome.agronomyData.knowldge}
        childComp={
          <Typewriter
            options={{
              strings: [
                "health and nutrition",
                "crop management",
                "pest and diseases",
                "agronomy",
                "consumer and market research",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        }
        content={newHome.agronomyData.subheading7}
        img={moneySanityVideo}
      />
      <LargestTraders  heading={"Trusted by the largest traders around the world"} doller={"From only $69 per person, per month"}/>
      <Powefulltool
        heading={blockplatform.actinable.title}
        content={blockplatform.actinable.subtitle.text}
        content2={blockplatform.actinable.subtitle.text5}
        image={dashboardLending}
      />
      <OurAltool
        heading={blockplatform.turboCharges.title}
        content={blockplatform.turboCharges.subtitle.text}
        content2={blockplatform.turboCharges.subtitle.text4}
        image={dashboardLending}
      />
     <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white lg:pb-32 md:pb-20 pb-10">
        <Farmers/>
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

export default HorticultureFarmer;
