/* eslint-disable max-len */
import { FC } from 'react';
import Calendars from '../Images/calendar.png';

export const Calendar: FC = () => {
  return (
    <>
      <img src={Calendars} alt='' 
        className='w-6'/>
    </>
  );
};

export default Calendar;
