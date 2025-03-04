import React from "react";
import "./style.css";

interface LeaderCardProps {
  photo: string;
  name: string;
  role: string;
  link: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ photo, name, role, link }) => {
  const parts = role
    .split("")
    .map((char, i) => (
      <span style={{ transform: `rotate(${i * 8}deg)` }}>{char}</span>
    ));

  return (
    <a
      href={link}
      className="w-auto rounded-md transform hover:scale-105 flex flex-col"
    >
      <div className="text-rotate">{parts}</div>
      <img
        src={photo}
        className="w-60 object-cover aspect-square rounded-full"
        alt={photo}
      />
      <span className="w-min text-nowrap mx-auto mt-2 py-2 px-4 rounded-2xl bg-mto_gray">
        {name}
      </span>
    </a>
  );
};

export default LeaderCard;
