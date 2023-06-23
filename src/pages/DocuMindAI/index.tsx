import React from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import moneySanityVideo from "assets/Images/documind-main.mp4";
import LargestTraders from "components/LargestTraders";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import Herosection from "components/Herosection/Herosection";
import DocmidLeft from "../../assets/Images/docmid-small.png";
import DocmidRight from "../../assets/Images/documind-right.png";
import Experiance from "components/ExperianceYarta/Experiance";
import Farmers from "components/Encrypted/farmers";
import Traders from "components/Encrypted/Traders";

const DocuMindAI = () => {
  const { blockplatform } = Content;
  const { newHome } = Content;
  const { TradeMarket } = Content;  

  return (
    <>
      <Herosection
        heading={newHome.docuMindAi.heading}
        className={'!max-w-[727px]'}
        childComp={
          <Typewriter
            options={{
              strings: ["grain market docs" , "agronomy docs" , "farm management docs" ,"livestock market docs" , "horticulture market docs"],
              autoStart: true,
              loop: true,
            }}
          />
        }
        content={newHome.docuMindAi.subheading}
        content2={newHome.docuMindAi.subheading2}
        video={moneySanityVideo}
      />
      <LargestTraders
        heading={"Trusted by the largest traders around the world"}
        doller={"From only $69 per person, per month"}
      />

      <Powefulltool
        heading={blockplatform.retriavals.title}
        content={blockplatform.retriavals.subtitle.text}
        content2={blockplatform.retriavals.subtitle.text2}
        image={DocmidLeft}
      />
      <OurAltool
        heading={blockplatform.tailored.title}
        content={blockplatform.tailored.subtitle.text}
        content2={blockplatform.tailored.subtitle.text2}
        content3={blockplatform.tailored.subtitle.text3}
        image={DocmidRight}
      />
      <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white lg:pb-32 md:pb-20 pb-10">
        <Farmers  />

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

export default DocuMindAI;
