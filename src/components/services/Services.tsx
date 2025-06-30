import { IoArrowDownSharp } from "react-icons/io5";
import Button from "../common/Button";
import Container from "../layout/Container";



const Services = () => {
  return (
    <section className="h-screen py-10 ">
      <Container>
        <div className=" flex items-center justify-center flex-col  ">


          <div className="flex justify-center  lg:-mr-[700px]">
            <span className="p-2 border rounded-full"><IoArrowDownSharp size={24} /></span>
            <Button className=" px-4" label="About" outlined />
          </div>



          <h2 className=" sm:text-4xl lg:text-7xl  font-sporting  leading-32 font-bold my-4">
            I’ve been <span className="bg-black text-white px-4 rounded-lg">Developing</span> <br /> Websites since <span className="bg-black text-white px-1 rounded-lg">2013</span>
          </h2>
          <p className="my-6 text-center w-6/12 mx-auto">
            We start every new client interaction with an in-depth discovery call where
            we get to know each other and recommend the best course of
            action.
          </p>

        </div>

        <div className="flex items-center justify-evenly ">
          <h4 className="font-sporting ml-16 font-semibold ">
          PREVIOUSLY <br /> WORKED ON
          </h4>

          <div className="flex flex-col items-end gap-4  my-12">
            <div className="flex gap-8 ">
            <Button className="hover:bg-black hover:text-white py-4 w-52 rotate-[30deg] translate-x-22"  label="awards" outlined/>
            <Button className="hover:bg-black hover:text-white py-4 w-52 translate-x-36" label="facebook"outlined/>
            <Button className="hover:bg-black hover:text-white py-4 w-52 translate-x-28 translate-y-6 rotate-[15deg]" label="CSSDesignAwards" outlined/>
           
            </div>
            

            <div className="flex gap-8">
            <Button className="hover:bg-black hover:text-white py-4 w-52 translate-x-7" label="CSSINNER" outlined/>
            <Button className="hover:bg-black hover:text-white py-4 w-52 font-bold -rotate-[14deg]" label="thoughtworks" outlined/>
            <Button className="hover:bg-black hover:text-white py-4 w-52 font-bold -translate-x-9 -translate-y-3" label="AUTODESK" outlined/>
            </div>
          </div>
        </div>
      </Container>
    </section>
    
  );
};

export default Services;