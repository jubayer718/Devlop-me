import { IoMdArrowForward } from "react-icons/io";

interface ProcessCardProps {
  description: string;
  action?:string;
  className?: string;
}

const ProcessCard = ({ description, action,className }: ProcessCardProps) => {
  return (
 
       <div className=" h-auto shrink-0 rounded-2xl bg-gradient-to-br bg-black hover:bg-[#C5FF41] p-6 text-white hover:text-black  shadow-lg 
      transition-transform duration-300 ease-in-out transform 
      hover:rotate-[4deg] hover:translate-y-1 hover:scale-105 hover:shadow-xl">
        <div className="flex justify-between items-center ">
          <span className="text-sm font-sporting hover:bg-black  bg-[#C5FFEE]  rounded-full mb-5 text-black hover:text-white px-4">{action}</span>
        <div className="flex gap-2  items-center hover:underline"><IoMdArrowForward />
        <button > Read more</button>
         </div>
    </div>
      <p className="text-sm text-gray-300 font-sporting">{description}</p>
    </div>

  );
};

export default ProcessCard;