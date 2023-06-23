import React from 'react';

const Chats = () => {
  return (
    <>
      {/* chats start */}
      <div>
        <div className='chats-main-sec text-white flex items-center
         justify-center bg-cover md:bg-60% z-10'>
          <div className='text-center py-9 px-4 z-80'>
            <h2 className='md:text-6xl text-3xl leading-none font-bold'>Stay informed with our market intel chats</h2>
            <p className='md:text-2xl text-lg max-w-[600px] w-full mx-auto pt-8 sm:pb-8 pb-5'>Want
              free automated market updates in chat? <br className='hidden md:block'/> 
              Check out our  public chats on WhatsApp below
            </p>
            <div className="flex justify-center items-center gap-7 gap-y-3 flex-wrap">
              <a href='https://chat.whatsapp.com/I3Vu11RG1Iq6NT03dffz6K' target='_blank'
                className='sm:mt-10 mt-2 rounded-md flex justify-center 
              items-center  font-bold bg-darkest border-2 border-purple
              relative overflow-hidden btn-hover' rel='noreferrer'>
                <span className='absolute btn-effect
               transition-all duration-300 top-0 
              left-[-100%] bg-purple block h-full w-full'></span>
                <span className='relative btn-text p-3 tracking-wide'>Grains and Oilseeds Chat</span>
              </a>
              <a href='https://chat.whatsapp.com/HGSjKPQmPqN5Romz9EcnqW' target='_blank'
                className='sm:mt-10 mt-2 rounded-md flex justify-center 
              items-center  font-bold bg-darkest border-2 border-purple
              relative overflow-hidden btn-hover' rel='noreferrer'>
                <span className='absolute btn-effect
               transition-all duration-300 top-0 
              left-[-100%] bg-purple block h-full w-full'></span>
                <span className='relative btn-text p-3 tracking-wide'>Livestock Chat</span>
              </a>
              <a href='https://chat.whatsapp.com/HhQBbgWlmbn02w1mKlm9M9' target='_blank'
                className='sm:mt-10 mt-2 rounded-md flex justify-center 
              items-center  font-bold bg-darkest border-2 border-purple
              relative overflow-hidden btn-hover' rel='noreferrer'>
                <span className='absolute btn-effect
               transition-all duration-300 top-0 
              left-[-100%] bg-purple block h-full w-full'></span>
                <span className='relative btn-text p-3 tracking-wide'>Carbon Markets Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chats;
