import React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;

}

const SkillCard = ({ title, description, icon }: SkillCardProps) => {
  return (
    <div className="w-[300px] shrink-0 rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-6 text-white shadow-lg 
      transition-transform duration-300 ease-in-out transform 
      hover:rotate-[4deg] hover:translate-y-1 hover:scale-105 hover:shadow-xl">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-sporting">{title}</h3>
      <p className="text-sm text-gray-300 font-sporting">{description}</p>
    </div>
  );
};

export default SkillCard;