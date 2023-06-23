import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Content } from '../../utils/content';

const OurMission = () => {
  const { ourMission } = Content;
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variant = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: 50, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <div className="bg-black-darkest w-full pt-10 text-white">
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={control}
        className="wrapper flex-col items-center justify-center">
        <h2 className="md:text-5xl text-3xl text-white  text-center font-bold ">
          {ourMission.title}
        </h2>
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-white-sixty text-base 2xl:text-xl lg:text-base
           md:my-10 my-5 lg:w-2/3 md:px-20 xl:px-28 text-center ">
            {ourMission.description}
          </p>
          <div className="flex flex-col lg:flex-row lg:flex-wrap xl:w-1/2-2rem w-2/3 text-center justify-center mb-20 
         ">
            {ourMission.missions.map((mission, i) => (
              <p key={i} className='lg:flex 2xl:items-center md:text-lg text-base m-2 px-1 items-start'>
                {mission}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurMission;
