import wheet from 'assets/Images/wheet.mp4';
import ship from 'assets/Images/ship.mp4';
import sydney from 'assets/Images/Yartaleadership.jpg';
import flage from '../../assets/Images/logo.svg';
import { useState, useEffect } from 'react';

const About = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="bg-black-darkest w-full">
      <div className='mb-10 relative py-16 lg:py-32 xl:py-56 xl:pt-40'>
        <div className='absolute inset-0 z-0 bg-black pointer-events-none'>
          <div className='bg-gradient w-full h-full bg-gradient-animation'></div>
          <div className='absolute inset-0 w-full bg-gradient-to-b from-black'></div>
          <div className='absolute inset-0 w-full bg-gradient-to-b from-black'></div>
        </div>
        <div className='wrapper flex-col !items-start justify-start relative'>
          <img className="mt-0 mb-8 h-16 md:h-18" src={flage}/>
          <h1 className="text-white font-light lg:text-5xl md:text-3xl text-2xl">
            <div className="lg:max-w-6xl">
              Our mission is to help farmers, traders and agricultural companies grow on their terms.
            </div>
          </h1>
          <p className="text-white md:text-xl text-lg md:my-5 mt-3 mb-10">
            <div className="lg:max-w-5xl ">
              High quality information and advice leads to improved decision-making. At Yarta,
              we’re developing a suit of tools to turbocharge productivity across the agricultural
              supply chain from farming, trading to supply chain logistics.
            </div>
          </p>
        </div>
      </div>
      <div className="wrapper flex-col !items-start justify-start ">
        <div className="lg:my-20 md:mt-10 mt-10 mb-10 flex md:flex-row flex-col items-center w-full md:text-left 
        text-center">
          <div className="flex-col md:w-1/2 w-full">
            <p className="text-gradient uppercase font-bold md:my-5 my-2">who we are</p>
            <p className="text-white font-bold lg:text-5xl md:text-3xl text-2xl">
              For traders and farmers, <br /> by traders and farmers
            </p>
            <p className="text-white-forty md:text-xl text-lg md:my-5 mt-3 mb-10">
              Yarta was built by a team of passionate entrepreneurs who know the
              challenges and opportunities that both traders and farmers face
              when exchanging, financing or hedging their commodities.
            </p>
          </div>
          <div className="border-gradient md:w-1/2 w-full lg:ml-20 md:ml-7">
            <div className="relative  ">
                <video
                  src={wheet}
                  width="100%"
                  className="rounded-md "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your Browser does not support videos
                </video>
              <div className="bg-black-background rounded-md absolute left-0 right-0 top-0 bottom-0 w-full"></div>
            </div>
          </div>
        </div>
        <div className="lg:my-20 mt-10 mb-10 w-full flex md:flex-row flex-col-reverse items-center">
          <div className="relative border-gradient md:w-1/2 w-full">
              <video
                src={ship}
                width="100%"
                className="rounded-md "
                autoPlay
                loop
                muted
                playsInline
              >
                Your Browser does not support videos
              </video>
            <div className="bg-black-background rounded-md absolute left-0 right-0 top-0 -bottom-0.5 w-full"></div>
          </div>
          <div className="lg:ml-20 md:ml-6 md:w-1/2 w-full md:text-left text-center">
            <p className="text-white font-bold lg:text-5xl md:text-3xl text-2xl">
              Make informed decision
            </p>
            <p className="text-white-forty md:text-xl text-lg md:my-7 mt-2 mb-10">
              Our goal is to the agricultural industry members with a central workspace for
              farming and global markets decision making.
            </p>
          </div>
        </div>
        <div className="lg:my-20 mt-10 mb-10 flex md:flex-row flex-col items-center w-full">
          <div className="md:w-1/2 w-full md:text-left text-center">
            <p className="text-white font-bold lg:text-5xl md:text-3xl text-2xl">The leadership team</p>
            <p className="text-white-forty md:text-xl text-lg md:my-6 mt-2">Yarta was founded by
              <a
                target="blank"
                href="https://www.linkedin.com/in/lesfinemore/"
                className="text-white-sixty ml-1"
              >
                Les Finemore
              </a>
              , an Australian commodity trader with a farming background.
              Previously, Les co-founded the AI enabled commodity hedge fund
              Imbue Capital.
            </p>
            <p className="text-white-forty md:text-xl text-lg md:my-5 mt-3 mb-10">
              Yarta brings together a team with a wide array of skillsets across
              trading, finance, AI and software engineering to build the next
              generation technology platform for the commodity industry.
            </p>
          </div>
          <div className="border-gradient md:w-1/2 w-full lg:ml-20 md:ml-7">
            <div className="relative">
              <img
                src={sydney}
                width="100%"
                className="rounded-md  shadow-inner"
              />
              <div className="bg-[rgba(0,0,0,0.2)] rounded-md absolute left-0 right-0 top-0 bottom-0 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
