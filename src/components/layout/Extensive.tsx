
import Button from "../common/Button";
import SkillsSlider from "../Skills/SkillSlider";
import Container from "./Container";
import {IoArrowDownSharp } from "react-icons/io5";
const Extensive = () => {
  return (
    <div className="bg-[#000000] h-screen rounded-4xl p-6">
      <Container>
        <div className="flex items-center gap-3">
          <span className="p-2 border rounded-full text-white"><IoArrowDownSharp size={24}/></span>
          <Button className="text-white p-2" label="why choose me?" outlined />
        </div>
        
        <div  className="flex items-center justify-between mt-6">
          <h2 className="font-sporting text-4xl font-bold text-white w-6/12">My Extensive<br />List of Skills</h2>
          <p className="text-white text-right w-5/12 font-sporting leading-relaxed">Building the worlds best marketing Your <br /> trusted partner for strategy, design, and dev.
          </p>
         <hr />
        </div>

        <SkillsSlider/>
      </Container>
    </div>
  );
};

export default Extensive;