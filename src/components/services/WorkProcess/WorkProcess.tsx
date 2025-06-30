import { IoArrowDownSharp } from "react-icons/io5";
import Button from "../../common/Button";
import ProcessCard from "./ProcessCard";


const WorkProcess = () => {

  const processSteps = [
    {

      description: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
      action: "Discovery",
    },
    {
 
      description: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
      action: "Design",
    },
    {

      description: "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
      action: "Strategy",
    },
    {
  
      description: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
      action: "Build",
    }
  ];
  return (
    <div className="bg-[#141414] h-screen rounded-4xl mt-32 p-10">
      <div className="flex  items-center">
      <div className="flex items-center ">
          <span className="p-2 border rounded-full text-white"><IoArrowDownSharp size={24}/></span>
          <Button className="text-white p-2" label="work process" outlined />
      </div>
      <h3 className="font-sporting font-bold text-5xl text-white w-96 mx-auto text-nowrap ">My Work Process</h3>
     </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {processSteps.map((step, index) => (
          <ProcessCard  key={index} {...step} />
        ))}
      </div>

    </div>
  );
};

export default WorkProcess;