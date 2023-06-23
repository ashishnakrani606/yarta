import { Dispatch, FC, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Plus from 'assets/Icons/Plus';
import MinusIcon from 'assets/Icons/MinusIcon';
import ArrowDown from 'assets/Icons/ArrowDown';

type Props = {
  i: number;
  // arrow: string;
  arrow : any;
  expanded: boolean | number;
  setExpanded: Dispatch<SetStateAction<number | false>> ;
  header: string;
  subtitle: string[];
  span?: {
    beforeSpan: string;
    span: string;
    afterSpan: string;
    
  };
};

const FaqDropdown: FC<Props> = ({
  header,
  subtitle,
  span,
  i,  
  expanded,
  arrow,  
  setExpanded,
}) => {
  const isOpen = i === expanded;

  return (
    <div className={`md:w-[750px] w-full md:p-8 p-4 ${isOpen ? 'bg-black-dark rounded-[30px]' : ''}`}>
      <motion.header
        initial={false}
        className=" cursor-pointer pb-2 rounded-md text-white "
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex items-center gap-6">         
        {
          arrow===true ?
          <ArrowDown rotate={isOpen} width={20} /> 
          :
          <>
            {isOpen ?
            <MinusIcon />
            :
            <Plus/>
            }          
          </>     
        }  
          <p className="md:text-xl text-lg font-medium">{header}</p>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className=" overflow-hidden"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.98 }, open: { scale: 1 } }}
              transition={{ duration: 0.5 }}
            >
              {subtitle.map((item, key) => (
                <>
                  <div
                    key={key}
                    className="!z-20 text-white-seventy md:mb-5 mb-2 pl-11 pr-0 rounded-lg"
                  >
                    {item}
                  </div>
                  {span && (
                    <div className="md:mb-5 mb-2 md:w-750px md:pr-6 pr-3 pl-11 text-white-sixty">
                      {span?.beforeSpan}
                      <a href="/" className="text-white mx-1">
                        {span?.span}
                      </a>
                      {span?.afterSpan}
                    </div>
                  )}
                </>
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqDropdown;
