import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const OurAltool =   (props : any) => {
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
    <div>    
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={control}        
      >   
      <div className="wrapper !mb-4 lg:!mb-26 md:!mb-16 justify-center sm:flex-row flex-col gap-x-8 lg:gap-28 gap-y-8 !lg:mt-36 sm:!items-start">
        <div className="w-full max-w-[578px] border-gradient relative">
          {props.video ?
        <video
              src={props.video}
              width="100%"
              className="rounded-md"
              autoPlay
              loop
              muted
              playsInline
            >            
          </video>
          :
          <img
            src={props.image}
            alt="dashboardLending"
            className="rounded-lg"
          />
          }
        </div>
        <div className="md:my-10 md:mt-4 w-full max-w-[602px] sm:text-left text-center sm:mb-0 mb-4">
          <h4 className="text-white lg:text-[56px] md:!leading-none md:text-4xl text-3xl font-bold">
            {props.heading}            
          </h4> 
          {(props.content) || (props.content2) || (props.content3) ? 
          (
          <div>
          <p className="text-white-sixty lg:text-2xl md:text-xl text-base mt-3 lg:mt-[30px] md:mt-4 max-w-[602px] w-full">
            {props.content}
          </p>
          <p className="text-white-sixty lg:text-2xl md:text-xl text-base mt-4 lg:mt-6  max-w-[602px] w-full">
            {props.content2}
          </p>
          {(props.content3) &&
          <p className="text-white-sixty lg:text-2xl md:text-xl text-base mt-4 max-w-[602px] w-full">
            {props.content3}
          </p>
          }
          </div>
          )
          :
          ''
          }
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default OurAltool;
