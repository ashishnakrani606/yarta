import FaqDropdown from 'components/FaqDropdown/FaqDropdown';
import { useState } from 'react';
import { Content } from 'utils/content';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import HubspotForm from 'react-hubspot-form'

interface Props  {
  index: number
}

const HelpCenter = ({index}: Props) => {
  const [expanded, setExpanded] = useState<false | number>(-1);
  const { helpCenter } = Content;
  const [activeIndex, setActiveIndex] = useState(index);
  console.log(activeIndex)
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variant = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: 50, opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <div className="bg-black-darkest">
      <div className="wrapper flex-col !items-start">
        <div className="lg:mb-20 mb-10 xl:mt-0 mt-14 sm:mx-0 mx-auto sm:text-left text-center">
          <p className="text-white font-bold md:text-4xl text-3xl">Help Centre</p>
          <p className="text-white">How can we help?</p>
        </div>
        <div className="flex sm:flex-nowrap flex-wrap w-full justify-center">
          <div
            onClick={() => setActiveIndex(1)}
            className={`hover:bg-purple transition-all ${
              activeIndex === 1 ? 'bg-purple' : 'bg-black-dark'
            } " sm:w-52 w-[40%] py-2 mr-3 sm:mb-0 mb-2 text-white-sixty cursor-pointer flex justify-center rounded-md 
            items-center"`}
          >
            Basics
          </div>
          <div
            onClick={() => setActiveIndex(2)}
            className={`hover:bg-purple transition-all ${
              activeIndex === 2 ? 'bg-purple' : 'bg-black-dark'
            } " sm:w-52 w-[40%] sm:mr-3 sm:mb-0 mb-2 text-white-sixty cursor-pointer flex justify-center 
             rounded-md items-center "`}
          >
            Pricing
          </div>        
          <div
            onClick={() => setActiveIndex(3)}
            className={`hover:bg-purple transition-all ${
              activeIndex === 3 ? 'bg-purple' : 'bg-black-dark'
            } " sm:w-52 w-[40%] h-[40px] sm:mr-3 sm:mb-0 mb-2 text-white-sixty cursor-pointer flex justify-center 
            rounded-md  items-center "`}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 bg-black-dark md:pt-10 pt-5 md:pb-20 sm:pb-14 pb-10 w-full">
        {activeIndex === 1 && (
          <div className="wrapper flex-col w-full">
            {helpCenter.Basics.map((question, key) => (
              <FaqDropdown
                arrow={true}
                key={key}
                header={question.title}
                subtitle={question.subtitle}               
                i={key}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        )}
        {activeIndex === 2 && (
          <div className="wrapper flex-col w-full">
            {helpCenter.Pricing.map((question, key) => (
              <FaqDropdown
                arrow={true}
                key={key}
                header={question.title}
                subtitle={question.subtitle}
                i={key}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        )}    
        {activeIndex === 3 && (
          <motion.div
            ref={ref}
            variants={variant}
            initial="hidden"
            animate={control}
            className="wrapper flex lg:flex-row flex-col-reverse w-full text-white !items-start"
          >
            <div className="sm:mb-16 mb-8 mt-5 xl:mr-20 mr-10 xl:ml-10 w-full flex flex-col justify-center">
              {helpCenter.contact.map((text, key) => (
                <p key={key} className="my-2 w-full text-sm flex text-white">
                  {text}
                </p>
              ))}
              <div className="text-sm xl:mt-16 mt-10">
                <p className="font-bold mb-4">Yarta Office Locations:</p>
                <div className="flex xl:flex-row lg:flex-col sm:flex-row 2xl:w-2/3 lg:w-full  sm:w-full
                 justify-between">
                  <div className="mr-5 pt-3 border-t border-purple lg:w-auto w-1/2">
                    <p>Sydney - Australia</p>
                    <p>Level 29, Chifley Tower, </p>
                    <p>2 Chifley Square</p>
                    <p>Sydney </p>
                    <p>NSW 2000 </p>
                  </div>
                  <div className="xlmr-5 pt-3 border-t border-purple xl:mt-0 lg:mt-3 sm:mt-0 lg:w-auto w-1/2">
                    <p>Mexico City - Mexico</p>
                    <p>Av. Paseo de la Reforma 296</p>
                    <p>Juárez Cuauhtemoc</p>
                    <p>Ciudad de México 06600</p>
                  </div>                 
                </div>
              </div>
            </div>
            <form className="lg:w-2/3 w-full mt-5 flex flex-col xl:mr-20">              
              <HubspotForm
                portalId='21451866'
                formId='0c378964-3924-4999-b4c3-45838c200601'
                onSubmit={() => console.log('Submit!')}
                loading={<div>Loading...</div>}
              />
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
