"use client"

import Container from "./Container";

const Hero = () => {
  return (
    <div className="heroContainer w-full h-screen  ">
      <Container>
        <div className="  h-full flex flex-col justify-center items-start">
        <h1 className="text-5xl font-bold font-sporting leading-24 ">Trusted <span className="bg-black text-white rounded-lg px-1 ">Partner</span> for <br /> Your Website <span className="bg-black text-white rounded-lg px-1">Develop</span></h1>
        <p className="mt-4 text-left mx-auto w-5/12">Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
      </div>
      </Container>
    </div>
  );
};

export default Hero;