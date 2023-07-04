import  {useState } from "react";
import emailField from "assets/Images/email-field.png";
import { Link } from "react-router-dom";

const Experiance = (props : any) => {
  const [isEmail, setIsEmail] = useState('');
  const handleEmailChange = (event:any) => {
    setIsEmail(event.target.value)
  };

  return (
    <>
        <div className='bg-black-darkest w-full h-full text-white relative bg-purplegrident overflow-hidden'>
        <div className='container-wrapper h-full mx-auto px-4'>
          <div className='text-center xl:py-[154px] md:py-20 py-12'>           
            <h2 className='text-3xl md:text-5xl font-semibold pt-4 tracking-[-0.02em] !leading-tight'>
              Ready to experience Yarta?
            </h2>           
            <p className='pt-9 md:text-xl text-base font-medium max-w-[530px] w-full mx-auto text-center'>
              Test drive the Yarta.ai platform with a 7-day trial
            </p>                    
             <div className="border-2 rounded-xl bg-[#5E5BF9] border-[#5E5BF9] sm:max-w-[459px] max-w-[289px] mx-auto overflow-hidden flex justify-center  relative z-[99999] mt-10">
                <input onChange={(e) => handleEmailChange(e)} type="email" placeholder="Enter your email"  className="border-radius-left md:py-[19px] py-3 sm:pl-6 pl-3 pr-2 sm:min-w-[260px] max-w-[152px] focus-visible:outline-none focus:outline-none text-black sm:placeholder:text-base placeholder:text-sm text-base placeholder:leading-tight leading-tight"/>
                <Link to={`https://app.yarta.ai/sign-up?email=${isEmail}`} target="blank" className="flex items-center bg-[#5E5BF9] py-3 sm:px-6 px-3 sm:min-w-[197px] md:text-xl text-base font-medium leading-snug">Try a Free Trial</Link>
              </div>
              <p className="pt-2.5">7-day free trial. No credit card needed.</p>
          </div>         
        </div>
      </div> 
    </>
  )
}

export default Experiance