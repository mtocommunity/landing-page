import React from "react";
import "./style.css";

interface LeaderCardProps {
  photo: string;
  name: string;
  role: string;
  link: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ photo, name, role, link }) => {
  return (
    <a
      href={link}
      className="block w-2/3 md:w-2/3 lg:w-2/3 rounded-md overflow-hidden 
                    text-center transform transition-transform duration-300 
                    hover:scale-105 team-card-shadow"
    >
      <img src={photo} className="w-full h-80 object-cover" />
      <div className="p-4 bg-mto_gray text-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </a>
  );
};

export default LeaderCard;
