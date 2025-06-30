import React from 'react';
import Button from '../common/Button';
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const InputForm = () => {
  return (
    <div className='bg-[#000000] p-6 rounded-lg'>
      <form  action="">
        <input className=' text-white py-4 px-3 font-sporting outline-none'  type="text" placeholder='Enter your name' required/>
        <hr className='border-white' />
        <input className=' text-white py-4 px-3 font-sporting outline-none' type="email" placeholder='Enter your email' required />
        <hr className='border-white' />
        <input className=' text-white py-4 px-3 font-sporting outline-none' type="text" placeholder='Describe your project'  required />
        <hr className='border-white' />
        <div className='flex items-center gap-3 mt-6 justify-center'>
          <Button className='flex items-center gap-2 text-white'  label='Send' icon={IoIosSend} outlined/> <span className='font-sporting text-white'>or</span>
          <Button className='flex items-center gap-2 text-white ' label='contact me' outlined icon={MdOutlineEmail}/>
        </div>

      </form>
    </div> 
  );
};

export default InputForm;