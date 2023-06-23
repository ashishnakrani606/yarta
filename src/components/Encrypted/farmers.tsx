
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Farmers = (props: any) => {
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
    <div>
     <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={control}   
        className="wrapper flex-col items-center lg:items-start">
        <div className="max-w-[1080px] mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-[56px] md:text-left text-white font-semibold mb-8 tracking-[-0.04em] !leading-[1.1] w-full">          
            Built           
            <span className="text-pink block md:inline text-gradient"> by farmers and traders</span>
            <br className="md:block hidden" />
            <span className="text-pink block md:inline text-gradient">
              for farmers and traders
            </span>
          </h2>
          <div className="flex w-full justify-between md:mb-[100px] mb-7 gap-6 md:gap-[60px]">
            <div className=" md:max-w-[498px] w-full">
              <p className="text-white/70 md:text-2xl text-base mb-8">
                <strong>Make smart and fast decisions </strong>
                 with one easy to use platform.
              </p>
              <p className="text-white/70 md:text-2xl text-base">
                Leverage our AI tools to unlock knowledge in seconds, not days.
              </p>
            </div>
            <div className="md:w-1/2 w-full md:text-2xl text-base">
              <strong className="text-white/70">Our Mission.</strong>
              <ul className="text-gradient font-semibold">
                <li>No gimmicks.</li>
                <li>No BS.</li>
                <li className="mt-6">
                  Empowering farmers and traders to grow on their terms.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Farmers
