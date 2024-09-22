import React from 'react';

interface LeaderCardProps {
  photo: string;
  name: string;
  role: string;
  link: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ photo, name, role, link }) => {
  if (!photo || !name || !role || !link) {
    console.error("Error: Missing required properties");
    return null; 
  }

  return (
    <a href={link} className="block w-2/3 md:w-2/3 lg:w-2/3 rounded-lg overflow-hidden shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
      <img src={photo} className="w-full h-80 object-cover"/>
      <div className="p-4 bg-mto_gray text-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </a>
  );
}

export default LeaderCard;