import { Link } from 'react-router-dom';
import CareersGlobe from '../../assets/Images/CareersGlobe.mp4';
import { useState, useEffect } from 'react';

const Careers = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const handleClick = () => {
    var input, filter, table, tr, td, i;
    input = document.getElementById("mylist") as HTMLInputElement;
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = document.getElementsByClassName("box");
    var massage = document.getElementById("massage") as HTMLElement;
    massage.classList.remove("block");
    massage.classList.add("hidden");
    for (i = 0; i < tr.length; i++) {
      if( filter != "*"){
        td = tr[i].getElementsByClassName("inner-box")[0];
        tr[i].classList.remove("hidden");
        tr[i].classList.remove("active");
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].classList.add("block", "active");
          } else {
            tr[i].classList.add("hidden");
          }
        }    
      } else{
        td = tr[i].getElementsByClassName("inner-box")[0];
        tr[i].classList.remove("hidden");
        tr[i].classList.remove("active");
        if (td) {
          tr[i].classList.add("block", "active");
        }  
      }
    } 
    let active = document.getElementsByClassName("active");
    if(active.length == 0 ){
      massage.classList.add("block");
      massage.classList.remove("hidden");
    } 
  }

  return (
    <div className="bg-black-darkest">
      <div className="wrapper flex flex-col items-center justify-center text-center">
        <div className="lg:my-20 my-10">
          <p className="text-gradient tracking-widest md:text-xl text-lg uppercase font-bold md:my-5 my-3">
            join our team
          </p>
          <h1 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Help reimagine how traders and <br className="xl:block hidden" />  farmers grow their businesses
          </h1>
          <p className="text-white-forty md:text-xl text-lg md:my-5 mt-5 mb-3">
            At Yarta, we’re making it easier, faster and simpler for traders and 
            farmer to trade, <br className="xl:block hidden" /> finance and hedge their commodities.  Come build
            with us, and help change the game. 
          </p>
        </div>
        <div className="wrapper flex-col items-center lg:items-start md:pt-20 md:pb-40 pb-10">
          <div className="w-full m-auto  md:flex items-center">
            <div className="lg:w-[50%] md:w-[60%] w-full pb-8 md:pb-0">
              <h2 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-left md:w-[90%]">
                Be part of a remote-first team of innovators
              </h2>
              <p className="text-white-forty md:text-xl text-lg md:my-5 mt-5 mb-3 text-left md:w-[90%]">
                Our global team works from the places they love–-from Sydney to New York, Mexico City to Bucharest.
              </p>
            </div>
            <div className="lg:w-[50%] md:w-[40%] w-full flex justify-center">
              <div className="border-gradient relative">
                { width < breakpoint ? 
                  <video
                    src={CareersGlobe}
                    width="100%"
                    className="rounded-md"
                    loop
                    muted
                  >
                    Your Browser does not support videos
                  </video>
                  :
                  <video
                    autoPlay
                    src={CareersGlobe}
                    width="100%"
                    className="rounded-md"
                    loop
                    muted
                  >
                    Your Browser does not support videos
                  </video>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full text-white md:text-4xl text-3xl">
          <p>Open Roles</p>
        </div>
        <div className="text-black md:mt-8 mt-4 mb-8">
          <select onChange={handleClick} id="mylist" name="departaments" className='bg-black-dark border text-white border-black-border'>
            <option value="*">All departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Product">Product</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
       <div className='jobs-boxes' >
        <div id="whr_embed_hook"></div>
       </div>
        <div className='w-full' id="myTable">
          <div className="box border mb-8 rounded-md border-purple md:w-3/5 w-full mx-auto">
            <div className="flex items-center justify-between px-5 py-7">
              <div className="text-left">
                <p className='inner-box text-purple text-gradient uppercase font-bold'>Engineering</p>
                <p className="text-white my-2 font-bold text-2xl">CTO/Co-Founding Engineer</p>
                <p className="text-white-forty">Location: Australia</p>
              </div>
              <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
                <Link
                  to="https://apply.workable.com/yarta-pty-ltd/j/2392DDDBFD/"
                  target='blank'
                >
                  View Job
                </Link>
              </div>
            </div>
          </div>
          <div className="box border mb-8 rounded-md border-purple md:w-3/5 w-full mx-auto">
            <div className="flex items-center justify-between px-5 py-7">
              <div className="text-left">
                <p className='inner-box text-purple text-gradient uppercase font-bold'>Engineering</p>
                <p className="text-white my-2 font-bold text-2xl">Fullstack Engineer</p>
                <p className="text-white-forty">Location: Australia</p>
              </div>
              <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
                <Link
                  to="https://apply.workable.com/yarta-pty-ltd/j/A6D7F0A005/"
                  target='blank'
                >
                  View Job
                </Link>
              </div>
            </div>
          </div>
          <div className="box border mb-8 rounded-md border-purple md:w-3/5 w-full mx-auto">
            <div className="flex items-center justify-between px-5 py-7">
              <div className="text-left">
                <p className='inner-box text-purple text-gradient uppercase font-bold'>Engineering</p>
                <p className="text-white my-2 font-bold text-2xl">Quantitative Researcher</p>
                <p className="text-white-forty">Location: Australia</p>
              </div>
              <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
                <Link
                   to="https://apply.workable.com/yarta-pty-ltd/j/5EBEFF5FF7/"
                   target='blank'
                >
                  View Job
                </Link>
              </div>
            </div>
          </div>
          <div className="box border mb-8 rounded-md border-purple md:w-3/5 w-full mx-auto">
            <div className="flex items-center justify-between px-5 py-7">
              <div className="text-left">
                <p className='inner-box text-purple text-gradient uppercase font-bold'>Engineering</p>
                <p className="text-white my-2 font-bold text-2xl">Senior Frontend Developer</p>
                <p className="text-white-forty">Location: Australia</p>
              </div>
              <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
                <Link
                   to="https://apply.workable.com/yarta-pty-ltd/j/6FC6FED61B/"
                   target='blank'
                >
                  View Job
                </Link>
              </div>
            </div>
          </div>
          <div id='massage' className='hidden pt-7 pb-10 text-white my-2 font-bold text-2xl'>
            <p className='text-white'>There are no open jobs for this category at this time. Check back soon.</p>
          </div>
        </div>
        {/* <div className="border md:mb-8 rounded-md border-purple">
          <div className="flex items-center justify-between px-5 py-7">
            <div className="text-left sm:w-auto w-1/2">
              <p className='text-purple text-gradient uppercase font-bold'>Engineering</p>
              <p className="text-white my-2 font-bold md:text-2xl sm:text-lg text-base">Senior Frontend Engineer</p>
              <p className="text-white-forty">Remote</p>
            </div>
            <div className="sm:ml-10 div ml-3 text-white md:text-xl text-lg bg-black-dark py-2 px-3">
              View Job
            </div>
          </div>
        </div> */}
        
        {/* <div className=" border mb-8 rounded-md border-purple w-3/5">
          <div className="flex items-center justify-between px-5 py-7">
            <div className="text-left">
              <p className='text-purple text-gradient uppercase font-bold'>Engineering</p>
              <p className="text-white my-2 font-bold text-2xl">Frontend Engineer</p>
              <p className="text-white-forty">Remote</p>
            </div>
            <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
              View Job
            </div>
          </div>
        </div>
        <div className=" border mb-8 rounded-md border-purple w-3/5">
          <div className="flex items-center justify-between px-5 py-7">
            <div className="text-left">
              <p className='text-purple text-gradient uppercase font-bold'>Engineering</p>
              <p className="text-white my-2 font-bold text-2xl">Fullstack Engineer</p>
              <p className="text-white-forty">Remote</p>
            </div>
            <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
              View Job
            </div>
          </div>
        </div>

        <div className=" border mb-8 rounded-md border-purple w-3/5">
          <div className="flex items-center justify-between px-5 py-7">
            <div className="text-left">
              <p className='text-purple text-gradient uppercase font-bold'>Engineering</p>
              <p className="text-white my-2 font-bold text-2xl">Backend Engineer</p>
              <p className="text-white-forty">Remote</p>
            </div>
            <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
              View Job
            </div>
          </div>
        </div>
        <div className=" border mb-8 rounded-md border-purple w-3/5">
          <div className="flex items-center justify-between px-5 py-7">
            <div className="text-left">
              <p className='text-purple text-gradient uppercase font-bold'>Engineering</p>
              <p className="text-white my-2 font-bold text-2xl">Backend Engineer</p>
              <p className="text-white-forty">Remote</p>
            </div>
            <div className="ml-10 div text-white text-xl bg-black-dark py-2 px-3">
              View Job
            </div>
          </div>
        </div> */}
      </div>

    </div>
  );
};

export default Careers;
