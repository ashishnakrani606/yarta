/* eslint-disable max-len */
import { FC } from 'react';
import Chats from '../Images/chatico.png';

export const Chat: FC = () => {
  return (
    <>
      <img src={Chats} alt='' 
        className='w-6'/>
    </>
  );
};

export default Chat;
