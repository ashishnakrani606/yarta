import React  from "react";
import Typewriter from "typewriter-effect";
import LargestTraders from "components/LargestTraders";
import moneySanityVideo from "assets/Images/fundamentals_marketdata.mp4";
import { useInView } from "react-intersection-observer";
import Traders from "components/Encrypted/Traders";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import Herosection from "components/Herosection/Herosection";
import MarketdataLeft from "../../assets/Images/marketdata-left.mp4";
import MarketdataRight from "../../assets/Images/marketdata-right.mp4";
import Experiance from "components/ExperianceYarta/Experiance";
import { Content } from "../../utils/content";
import Farmers from "components/Encrypted/farmers";

const Data = () => {
  const { blockplatform } = Content;
  const { newHome } = Content;
  const { TradeMarket } = Content; 

  return (
    <>
      <Herosection
        heading={newHome.tradeData.heading}
        className={'!max-w-[727px]'}
        childComp={
          <Typewriter
            options={{
              strings: [
                "global grain fundmentals",
                "live commodity news",
                "US livestock market",
                "Australian cattle market",
                "US horticulture fundamentals",
                "global weather",
                "global vessel movements",
              ],    

              autoStart: true,
              loop: true,
            }}
          />
        }
        content={newHome.tradeData.subheading}
        video={moneySanityVideo}
      />
      <LargestTraders
        heading={"Trusted by the largest traders around the world"}
        doller={"From only $69 per person, per month"}
      />      

      <Powefulltool
        heading={blockplatform.tradeData.title}
        content={blockplatform.tradeData.subtitle.text}
        video={MarketdataLeft}
      />
      <OurAltool
        heading={blockplatform.diceData.title}
        content={blockplatform.diceData.subtitle.text}
        content2={blockplatform.diceData.subtitle.text2}
        video={MarketdataRight}
      />
      <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white lg:pb-32 md:pb-20 pb-10">
        <Farmers/>
        <Traders
          content={TradeMarket.fundamental.desc}
          content2={TradeMarket.fundamental.desc2}
          content3={TradeMarket.fundamental.desc3}
          content4={TradeMarket.fundamental.desc4}
          content5={TradeMarket.fundamental.desc5}
          content6={TradeMarket.fundamental.desc6}
        />
      </div>
      <Experiance        
      />
    </>
  );
};

export default Data;
