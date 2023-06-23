/* eslint-disable max-len */
import { FC } from 'react';
import Trackico from '../Images/marketdata.svg';

export const Track: FC = () => {
  return (
    <>
      <img src={Trackico} alt='' 
        className='w-6 h-6'/>
    </>
  );
};

export default Track;
