import  { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Content } from "utils/content";
import { Link } from "react-router-dom";
import wheet from "assets/Images/Hero-video.mp4";
import MoneyVideo from "assets/Images/moneySanityVideo.mp4";
import emailField from "assets/Images/email-field.png";
import moneySanityVideo from "assets/Images/money-sanity-video.png";
import bluePlay from "assets/Images/blue-play.svg";
import platdashboard from "../../assets/Images/platformdash-new.png";
import LargestTraders from "components/LargestTraders";
import Encrypted from "components/Encrypted/Encrypted";
import FaqDropdown from "components/FaqDropdown/FaqDropdown";
import Powefulltool from "components/Powefulltool/Powefulltool";
import OurAltool from "components/Powefulltool/OurAltool";
import dashboardLending from "../../assets/Images/Landing_video1.mp4";
import dashboardLending2 from "../../assets/Images/landing_video2.mp4";
import Farmers from "components/Encrypted/farmers";
import { Ticker } from "react-ts-tradingview-widgets";
import { validateHeaderName } from "http";

const Home = () => {
  const { FaqQuestion } = Content;
  const [expanded, setExpanded] = useState<false | number>(-1);
  const [isEmail, setIsEmail] = useState('');
  const { newHome } = Content;
  const { newHomeMission } = Content;
  const { blockplatform } = Content;

  const [width, setWidth] = useState(0);
  const breakpoint = 620;


  const handleEmailChange = (event:any) => {
    setIsEmail(event.target.value)
  };


  useEffect(() => {
    const handleResize = () => {
      let box = document.querySelector(
        "#tradingview_widget_wrapper div a span"
      ) as HTMLDivElement;
      box.innerHTML = "Quotes ";
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    setWidth(window.innerWidth)
  });

  
  const data = [
    {
      title: "CBOT Wheat Front Month Future xdf",
      proName: "CBOT:ZW1!",
    },
    {
      title: "CBOT Corn Front Month Future",
      proName: "CBOT:ZC1!",
    },
    {
      title: "CBOT Soybeans Front Month Future",
      proName: "CBOT:ZS1!",
    },
    {
      title: "CBOT Soybean Meal Front Month Future",
      proName: "CBOT:ZM1!",
    },
    {
      title: "CBOT Soybean Oil Front Month Future",
      proName: "CBOT:ZL1!",
    },
  ];
  return (
    <>
      <div className="bg-black-darkest lg:pt-20 lg:pb-36 md:py-14 sm:py-10 py-7">
        <div className="w-full h-full text-white flex gap-x-4 lg:flex-row justify-between flex-col gap-y-9 items-center wrapper">
          <div className="flex flex-col lg:flex-row h-full">
            <div
              className="lg:max-w-[560px] w-full flex items-center justify-center lg:text-left text-center lg:items-start
            flex-col lg:py-5"
            >
              <div className="text-white lg:text-6xl md:text-5xl text-3xl font-bold tracking-tight leading-10 max-w-[531px] w-full ">
                {newHome.tradeDirectly.titleBeforeSpan}
                <span className="md:hidden inline-block text-3xl font-bold">
                  <span className="text-gradient pl-1">commodity trading</span>
                </span>
                <div className="hidden md:flex justify-center lg:justify-start items-center pt-2">
                  <span className="type xl:text-6xl lg:text-5xl sm:text-5xl text-3xl">
                    <Typewriter
                      options={{
                        strings: [
                          "market research",
                          "farming business",
                          "commodity trading",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="w-full contents justify-center lg:justify-start">
                <p className="text-white md:text-xl sm:text-xl text-center lg:text-left text-base mt-6 lg:max-w-[440px] w-full mx-auto sm:mx-0">
                  {newHome.tradeDirectly.subtitle}
                </p>
                <p className="text-white md:text-xl sm:text-xl text-center lg:text-left text-base mt-6 lg:max-w-[440px] w-full mx-auto sm:mx-0">
                  {newHome.tradeDirectly.subtitle2}
                </p>
              </div>
              <div className="mt-10">
                <div className="border-2 rounded-xl border-[#5E5BF9] overflow-hidden flex">
                  <input onChange={(e) => handleEmailChange(e)}  type="email" placeholder="Enter your email"  className="border-radius-left md:py-[19px] py-3 sm:pl-6 pl-3 pr-2 sm:min-w-[260px] sm:max-w-[152px] max-w-full w-full focus-visible:outline-none focus:outline-none text-black sm:placeholder:text-base placeholder:text-sm text-base placeholder:leading-tight leading-tight"/>
                  <Link to={`https://app.yarta.ai/sign-up?email=${isEmail}`} target="blank" className="block">
                  <button  className="bg-[#5E5BF9] py-3 sm:px-6 px-3 h-full sm:min-w-[197px] whitespace-nowrap md:text-xl text-base font-medium leading-snug">Try a Free Trial</button>
                  </Link>
                </div>
                <p className="text-white/70 mt-2.5 font-medium">
                  Test drive the Yarta.ai platform with a 7-day trial
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full max-w-[591px]">
            <img src={producersByCountry} />
          </div> */}
          <div className="md:w-1/2 w-full lg:ml-20 md:ml-7">
            <div className="relative">
                <video
                  src={wheet}
                  width="100%"
                  className="rounded-md "
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              <div className="rounded-md absolute left-0 right-0 top-0 bottom-0 w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <LargestTraders
        heading="Loved by the largest traders and farmers across the globe"
        doller="From only $69 USD per person, per month"
        className={"!mb-0"}
      />
      <div className="wrapper">
      <div className="bg-black-darkest w-full lg:pt-[115px] md:pt-16 pt-14 text-white">
        <h2 className="lg:text-[64px] md:text-5xl text-3xl text-white  text-center font-bold ">
          {newHomeMission.title}
        </h2>
        <div className="flex flex-col w-full items-center justify-center lg:pb-[100px] md:pb-16 pb-12">
          <p className="text-white-sixty lg:text-2xl md:text-xl text-lg md:mt-8 mt-5 lg:w-2/3 md:px-20 xl:px-28 text-center">
            {newHomeMission.subtitle}
          </p>
          <p className="text-white-sixty lg:text-2xl md:text-xl text-lg md:mt-8 mt-4 lg:w-2/3 md:px-20 xl:px-28 text-center">
            {newHomeMission.description.text}
            <Link to={newHomeMission.description.linkUrl} className="font-bold">
              {newHomeMission.description.link}
            </Link>
          </p>
        </div>       
          {/* <div className="darkpink-gradient w-full rounded-[20px] lg:p-[60px] md:p-8 p-5 md:pb-0 pb-0 pad-bottom-set"> */}
            <div className="relative">
              {/* <img src={moneySanityVideo} /> */}
               <video
                  src={MoneyVideo}
                  width="100%"
                  className="rounded-md "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                </video>  
            </div>
          {/* </div> */}
        </div>
      </div>
      <div className="bg-black-darkest w-full lg:pt-[108px] md:pt-20 pt-8 text-white lg:pb-32 md:pb-20 pb-10">
        <Farmers />
        <Encrypted />
      </div>
      {/* <Encrypted /> */}
      <Powefulltool
        heading={blockplatform.tradeDirect.title}
        content={blockplatform.tradeDirect.subtitle.text}
        content2={blockplatform.tradeDirect.subtitle.text2}
        video={dashboardLending}
        // className={""}
      />
      <OurAltool
        heading={blockplatform.tradeCash.title}
        content={blockplatform.tradeCash.subtitle.text}
        content2={blockplatform.tradeCash.subtitle.text2}
        video={dashboardLending2}
      />

      <div className="bg-black-darkest w-full h-full text-white relative md:mt-0 mt-10 bg-gradient overflow-hidden">
        <div className="flex flex-col lg:flex-row wrapper container-wrapper h-full">
          <div className="md:w-full lg:w-2/3 flex-col text-center lg:text-left lg:pt-0 pt-8 pb-11 md:pb-0">
            <div>
            <h2 className="text-3xl md:text-5xl font-semibold pt-4 tracking-[-0.02em] !leading-tight">
              Ready to experience Yarta?
            </h2>
            <p className="pt-9 md:text-xl text-base font-medium max-w-[580px] m-auto lg:m-0">
              Test drive the Yarta.ai platform with a 7-day trial
            </p>         
            </div>
            <div className="border-2 rounded-xl border-[#5E5BF9] bg-[#5E5BF9] sm:max-w-[459px] max-w-[289px] mx-auto lg:ml-0 overflow-hidden flex justify-center lg:justify-start relative z-[99999] mt-10">
              <input onChange={handleEmailChange} type="email" placeholder="Enter your email"  className=" border-radius-left md:py-[19px] py-3 sm:pl-6 pl-3 pr-2 sm:min-w-[260px] max-w-[152px] focus-visible:outline-none focus:outline-none text-black sm:placeholder:text-base placeholder:text-sm text-base placeholder:leading-tight leading-tight"/>
              <Link to={`https://app.yarta.ai/sign-up?email=${isEmail}`} target="blank" className="flex items-center bg-[#5E5BF9] py-3 sm:px-6 px-3 sm:min-w-[197px] md:text-xl text-base font-medium leading-snug">Try a Free Trial</Link>
            </div>
            <p className="pt-2.5">7-day free trial. No credit card needed.</p>
          </div>
          <div
            className="3xl:min-w-[48vw] 3xl-s:min-w-[43vw] lg:translate-x-[45%] lg:translate-y-[45px]
            h-fit align-bottom translate-x-[31%] translate-y-[-49px] hidden md:block"
          >
            <div className="pt-20">
              <img
                src={platdashboard}
                className="rounded-tl-md rounded-bl-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkest px-4">
        <div className="text-white text-center lg:pt-24 md:pt-12 lg:pb-16 md:pb-10 py-10">
          <h2 className="md:pb-[30px] pb-4 lg:text-[56px] md:text-4xl text-2xl font-semibold leading-none">
            Frequently asked questions
          </h2>
          <p className="text-[#FFFFFFB2] lg:text-2xl md:text-xl text-base">
            If you can’t find the answer needed, email support@yarta.ai
          </p>
        </div>
        <div className="flex-col w-full md:max-w-[768px] max-w-[490px] mx-auto lg:mb-24 md:mb-20 sm:mb-14 mb-10">
          {FaqQuestion.Basics.map((question, key) => (
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
      <Ticker colorTheme="dark" symbols={data} ></Ticker>
    </>
  );
};

export default Home;