import { Link } from 'react-router-dom';
import LDC from "assets/Images/LDC-logo.svg";
import cofco from "assets/Images/cofco-logo.svg";
import CHS from "assets/Images/CHS-logo.svg";
import cargill from "assets/Images/cargill-logo.svg";
import glencore from "assets/Images/glencore-logo.svg";

const LargestTraders = (props : any) => {
  return (
    <div className={`bg-black-dark w-full text-white/70 text-center lg:py-12 mb-10 sm:mb-14 md:mb-24 lg:mb-40 py-10 ${props.className}`}>
      <div className="flex flex-col justify-center wrapper h-full">
        <h3 className='lg:text-2xl md:text-xl text-lg font-bold'>{props.heading}</h3>
        <div className='grid grid-cols-5 justify-center md:gap-10 gap-5 lg:py-10 py-6'>
           <Link to={''}><img src={LDC} className="w-fit"/></Link>
           <Link to={''}><img src={cofco} className="w-fit"/></Link>
           <Link to={''}><img src={CHS} className="w-fit"/></Link>
           <Link to={''}><img src={cargill} className="w-fit"/></Link>
           <Link to={''}><img src={glencore} className="w-fit"/></Link>
        </div>
        <h3 className='lg:text-2xl md:text-xl text-lg font-medium'>{props.doller}</h3>
      </div>
    </div>
  )
}

export default LargestTraders
