import { Content } from "../../utils/content";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  Money,
  Bag,
  Connection,
  Market,
  Custom,
} from "../../assets/Icons";
import Weather from "../../assets/Icons/Weather";

const Traders = (props: any) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variant = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: 50, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div ref={ref} variants={variant} initial="hidden" animate={control}>
      <div className="wrapper flex-col items-center lg:items-start">
        <div className="flex w-full justify-center flex-wrap built-traders">
          <div className="rounded-[20px] lg:w-3/5 xl:w-5/12 w-full sm:w-4/6 flex bg-black-dark my-2 xl:mr-5 md:p-10 p-6 items-center">
            <div className="md:mr-9 mr-4">
              <Money />
            </div>
            <div>
              <p className="xl:text-lg 2xl:text-2xl text-lg font-bold text-white-light">
              Fundamental Data
              </p>
              <p className="mt-2 text-purple font-bold ">
                <span className="text-white-sixty font-normal text-base md:text-lg lg:text-xl">
                  {props.content}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[20px] lg:w-3/5 xl:w-5/12 w-full sm:w-4/6 flex bg-black-dark my-2 xl:mr-5 md:p-10 p-6 items-center">
            <div className="md:mr-10 mr-4 ">
              <Custom />
            </div>
            <div>
              <p className="xl:text-lg 2xl:text-2xl text-lg font-bold text-white-light">
              Stream Live News
              </p>
              <p className="mt-2 text-purple font-bold ">
                <span className="text-white-sixty font-normal text-base md:text-lg lg:text-xl">
                  {props.content2}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[20px] lg:w-3/5 xl:w-5/12 w-full sm:w-4/6 flex bg-black-dark my-2 xl:mr-5 md:p-10 p-6 items-center">
            <div className="md:mr-10 mr-4 ">
              <Weather />
            </div>
            <div>
              <p className="xl:text-lg 2xl:text-2xl text-lg font-bold text-white-light">
              Weather
              </p>
              <p className="mt-2 text-purple font-bold ">
                <span className="text-white-sixty font-normal text-base md:text-lg lg:text-xl">
                  {props.content3}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[20px] lg:w-3/5 xl:w-5/12 w-full sm:w-4/6 flex bg-black-dark my-2 xl:mr-5 md:p-10 p-6 items-center">
            <div className="md:mr-10 mr-4">
              <Connection />
            </div>
            <div>
              <p className="xl:text-lg 2xl:text-2xl text-lg font-bold text-white-light">
              eagleAI and DocuMindAI
              </p>
              <p className="mt-2 text-purple font-bold ">
                <span className="text-white-sixty font-normal text-base md:text-lg lg:text-xl">
                  {props.content4}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[20px] lg:w-3/5 xl:w-5/12 w-full sm:w-4/6 flex bg-black-dark my-2 xl:mr-5 md:p-10 p-6 items-center">
            <div className="md:mr-10 mr-4 ">
              <Bag />
            </div>
            <div>
              <p className="xl:text-lg 2xl:text-2xl text-lg font-bold text-white-light">
              Market Data
              </p>
              <p className="mt-2 text-purple font-bold ">
                <span className="text-white-sixty font-normal text-base md:text-lg lg:text-xl">
                  {props.content5}
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[20px] lg:w-3/5 xl:w-5/12 w-full sm:w-4/6 flex bg-black-dark my-2 xl:mr-5 md:p-10 p-6 items-center">
            <div className="md:mr-10 mr-4 ">
              <Market />
            </div>
            <div>
              <p className="xl:text-lg 2xl:text-2xl text-lg font-bold text-white-light">
              Alternative Data
              </p>
              <p className="mt-2 text-purple font-bold ">
                <span className="text-white-sixty font-normal text-base md:text-lg lg:text-xl">
                  {props.content6}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Traders;
