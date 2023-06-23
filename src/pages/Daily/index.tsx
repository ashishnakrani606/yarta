import React, {useState } from 'react';
import HubspotForm from 'react-hubspot-form'
// import { Link } from 'react-router-dom';
import IPhone  from '../../assets/Images/iPhone-12-Pro.png';
import SliderOne  from '../../assets/Images/Group-409.png';
import Sliderforth  from '../../assets/Images/image-2.png';
import SliderThree  from '../../assets/Images/cargill.png';
import SliderTwo  from '../../assets/Images/fa4d37db-982b-49a1-b24d-4 1.png';
import axios from 'axios';

const API_PATH = 'https://yarta.io/send-email'; 
const Daily = () => {
  const [email, setEmail] = useState('');
  const [mailSent, setMailSent] = useState('');
  const [mailError, setMailError] = useState({});
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const handleFormSubmit = (e: any, name: any) => {
    console.log('demo', name)
    e.preventDefault();
    const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if (validateEmail) {
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
          email: email,
          error: mailError,
          mailSent: mailSent,
          type: name,
        }
      })
        .then((result: any) => {
          setSuccessMsg('Signup is complete! thanks for subscribing.');
          setTimeout(() => {
            setSuccessMsg('');
          }, 3000)
          setMailSent(result.data.sent);
          console.log('Signup is complete! thanks for subscribing.')
        })
        .catch((error: any) => setMailError({ 
          error: error.message 
        }));
    } else {
      setErrMsg('Please enter valid email.')
      setTimeout(() => {
        setErrMsg('')
      }, 3000)
    }   
  }

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  }

  const [activeIndex, setActiveIndex] = useState(1); 
  return (
    <div>
      <div className="bg-black-darkest w-full pt-10 text-white">
       <div className='text-white flex flex-wrap pb-20 lg:max-w-[100%]  max-w-[767px] m-auto' >
          <div className='w-full lg:w-[45%] yarta_email_bg order-2 lg:order-1' >
            <img className='mx-auto mb-[-60px]' src={IPhone} alt=""/>
          </div>
          <div className='order-1 lg:order-2  w-full lg:w-[55%] px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 ' >
              <p className='text-white text-center lg:text-left text-[40px] lg:text-6xl font-bold tracking-tight leading-10 max-w-[531px]w-full m-auto lg:ml-0 md:max-w-[480px]' >
                Get smarter about <span className='text-pink  block md:inline text-gradient' >global ag markets.</span>
              </p>
              <p className='text-center lg:text-left lg:text-2xl text-lg text-white font-medium py-[24px]' >Join some of the world’s largest traders and get our 5 min daily newsletters on what matters in global grain and livestock markets.</p>
              <div className='bg-[#1F1E25] py-[30px] px-[20px] rounded-xl box-Roundup'>
                <p className='pb-[24px] text-center lg:text-left lg:text-2xl text-xl '>Daily Roundup</p>
                <div className="pb-6 grid sm:gap-4 gap-2 grid-cols-2 mx-auto justify-start
                  w-full lg:max-w-[1000px] max-w-[100%]">
                    <div
                      onClick={() => setActiveIndex(1)}
                      className={` bg-[#16151A] lg:p-[18px] p-[15px] items-center gap-1 ${
                        activeIndex === 1 ? 'bg-[#16151A]' : 'bg-[#16151A]'
                      } text-white-sixty cursor-pointer flex justify-start rounded-md 
                      items-cenetr`}
                    >
                       <input type="radio" id="html" name="fav_language" defaultChecked={true} value="HTML"/>
                       <label htmlFor="html" className=' font-normal text-base' >Grain & Oilseed</label>
                    </div>
                    <div
                      onClick={() => setActiveIndex(2)}
                      className={`bg-[#16151A] lg:p-[18px] p-[15px] gap-2 ${
                        activeIndex === 2 ? 'bg-[#16151A]' : 'bg-[#16151A]'
                      } text-white-sixty cursor-pointer flex justify-start 
                      rounded-md items-center`}
                    >
                       <input type="radio" id="css" name="fav_language" value="CSS"/>
                      <label htmlFor="css" className=' font-normal text-base'>Livestock</label><br></br>
                    </div>
                  </div>
                  <div className='' >
                    {activeIndex === 1 && (
                      <iframe src="https://embeds.beehiiv.com/7ad72459-f1e3-46b2-ab6c-2c26cd44c080?slim=true"
                      data-test-id="beehiiv-embed" height="52" frameBorder="0" scrolling="no" 
                      style={{ margin: "0", borderRadius: "0px !important", backgroundColor: "transparent", width: "100%" }} ></iframe>
                    )}
                    {activeIndex === 2 && (
                      <iframe src="https://embeds.beehiiv.com/0f3a3c44-d810-4a5e-a3cb-00d88820bc82?slim=true"
                      data-test-id="beehiiv-embed" height="52" frameBorder="0" scrolling="no" 
                      style={{ margin: "0", borderRadius: "0px !important", backgroundColor: "transparent", width: "100%" }}></iframe>
                    )}
                  </div>
              </div>
              <p className='font-medium lg:text-xl text-base text-white  py-[24px] text-center lg:text-left' >Read by Top Industry Traders</p>
              <ul className='flex items-center lg:justify-start justify-between pb-8 lg:pb-0 ' >
                <li className='pr-8'>
                  <a href="#0">
                    <img src={SliderOne} alt=""/>
                  </a>
                </li>
                <li className='pr-8'>
                  <a href="#0">
                    <img src={SliderTwo} alt=""/>
                  </a>
                </li>
                <li className='pr-8'>
                  <a href="#0">
                    <img src={SliderThree} alt=""/>
                  </a>
                </li>
                <li className=' lg:pr-8'>
                  <a href="#0">
                    <img src={Sliderforth} alt=""/>
                  </a>
                </li>
              </ul>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Daily
