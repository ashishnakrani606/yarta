import { Content } from "../../utils/content";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Encrypted = () => {
  const { encrypted } = Content;
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
          {encrypted.card.map((card, i) => (
            <div
              key={i}
              className="rounded-[20px] lg:w-3/5 xl:w-5/12 w-full sm:w-4/6 flex bg-black-dark my-2 xl:mr-5 md:p-10 p-6 items-center"
            >
              <div className="md:mr-10 mr-4  ">
                <card.iconName />
              </div>
              <div>
                <p className="xl:text-lg 2xl:text-2xl text-lg font-bold text-white-light">
                  {card.title}
                </p>
                <p className="mt-2 text-purple font-bold">
                  <b>{card.span}</b>
                  <span className="text-white-sixty font-normal text-base md:text-lg lg:text-xl">
                    {card.desc1}
                  </span>
                 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Encrypted;
