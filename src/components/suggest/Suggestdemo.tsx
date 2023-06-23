import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable  @typescript-eslint/no-explicit-any */
const Suggestdemo = (props: any) => {
  console.log(typeof props)
  return (
    <>
      <div className='bg-gradient'>
        <div className='text-white wrapper justify-center py-24 items-center flex-wrap gap-x-6 gap-y-4'>
          <h2 className='sm:text-4xl text-3xl font-bold text-center'>
            {props.title}
          </h2>
          <Link
            to={props.link}
            target='_blank'
            className=' rounded-md flex justify-center 
              items-center  font-bold bg-black border-0
              relative overflow-hidden btn-hover'
            rel='noreferrer'
          >
            <span
              className='absolute btn-effect
               transition-all duration-300 top-0 
              left-[-100%] bg-purple block h-full w-full'
            ></span>
            <span className='relative btn-text px-7 py-3 tracking-wide inline-block'>
              {props.button}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Suggestdemo;
