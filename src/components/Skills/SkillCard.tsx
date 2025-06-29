import React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
 
}

const SkillCard = ({ title, description, icon}: SkillCardProps) => {
  return (
    <div className="w-[300px] shrink-0 rounded-2xl bg-gradient-to-br from-black to-zinc-900 p-6 text-white shadow-lg hover:scale-105 transition-all duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default SkillCard;