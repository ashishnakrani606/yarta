import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import LargestTraders from "components/LargestTraders";
import moneySanityVideo from "assets/Images/woolgrower-main.mp4";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import Herosection from "components/Herosection/Herosection";
import LivestockLeft from "../../assets/Images/eagleal-left.png";
import LivestockRight from "../../assets/Images/documind-right.png";
import Experiance from "components/ExperianceYarta/Experiance";
import Farmers from "components/Encrypted/farmers";
import Traders from "components/Encrypted/Traders";

const LivestockFarmer = (props: any) => {
  const { blockplatform } = Content;
  const { TradeMarket } = Content;
  const { newHome } = Content;
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <Herosection
        heading={newHome.agronomyData.heading}
        Knowldge={newHome.agronomyData.knowldge}
        childComp={
          <Typewriter
            options={{
              strings: [
                "grazing land management",
                "weed control",
                "prest management",
                "genetics",
                "animal health & welfare",
                "environmental sustainability",
                "market compliance",
              ],

              autoStart: true,
              loop: true,
            }}
          />
        }
        content={newHome.liveStock.subheading}
        video={moneySanityVideo}
      />
      <LargestTraders  heading={"Trusted by the largest traders around the world"} doller={"From only $69 per person, per month"}/>
      <Powefulltool
        heading={blockplatform.actinable.title}
        content={blockplatform.actinable.subtitle.text}
        content2={blockplatform.livestockData.subtitle.text2}
        image={LivestockLeft}
      />
      <OurAltool
        heading={blockplatform.turboCharges.title}
        content={blockplatform.turboCharges.subtitle.text}
        content2={blockplatform.livestockCharges.subtitle.text2}
        image={LivestockRight}
      />
     <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white lg:pb-32 md:pb-20 pb-10">
        <Farmers />
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

export default LivestockFarmer;
