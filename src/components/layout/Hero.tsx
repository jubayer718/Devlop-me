"use client"

import { IoIosCall  } from "react-icons/io";
import Button from "../common/Button";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="heroContainer w-full h-screen pt-24">
      <Container>
        <div className=" flex flex-col justify-center items-start">
        <h1 className="text-5xl font-bold font-sporting leading-24 ">Trusted <span className="bg-black text-white rounded-lg px-1 ">Partner</span> for <br /> Your Website <span className="bg-black text-white rounded-lg px-1">Develop</span></h1>
        <p className="mt-4 text-left mx-auto w-5/12">Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
        </div>
       
        <div className="flex  justify-center items-center gap-4 mt-8">
          <Button className= "lg:-ml-96 flex items-center gap-1" label="Schedule a Call" outlined type="button" icon={IoIosCall } />
        </div>
 
      </Container>
    </div>
  );
};

export default Hero;