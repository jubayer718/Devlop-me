import React from 'react';
import { IoArrowDownSharp } from 'react-icons/io5';
import Button from '../common/Button';
import Container from '../layout/Container';
import { IoIosCall  } from "react-icons/io";
import InputForm from './InputForm';

const Interested = () => {
  return (
    <Container>
      <div className="h-screen  py-20 flex lg:flex-row flex-col">
      <div className='w-6/12 my-3'>
      <div className="flex items-center w-6/12">
                <span className="p-2 border rounded-full text-black"><IoArrowDownSharp size={24}/></span>
                <Button className="text-black p-2" label="contact" outlined />
      </div>
      
          <h2 className='text-5xl font-bold font-sporting'>Interested in <br />  work together?</h2>
          <p className='font-sporting '>
          We start every new client interaction with an in-depth discovery  call where
          we get to know each other
          </p>
          <Button className=' flex gap-1 items-center ' outlined label="schedule a call" icon={IoIosCall}/>
        </div>
        <div className='w-6/12'>
         <InputForm />
        </div>
      </div>
    </Container>
  );
};

export default Interested;