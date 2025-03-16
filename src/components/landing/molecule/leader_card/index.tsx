import React from "react";
import "./style.css";

interface LeaderCardProps {
  photo: string;
  name: string;
  role: string;
  link: string;
  easter_egg?: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  photo,
  name,
  role,
  link,
  easter_egg,
}) => {
  const parts = role
    .split("")
    .map((char, i) => (
      <span style={{ transform: `rotate(${i * 8}deg)` }}>{char}</span>
    ));

  const partsEasterEgg = (easter_egg ?? role)
    .split("")
    .map((char, i) => (
      <span style={{ transform: `rotate(${i * 8}deg)` }}>{char}</span>
    ));

  return (
    <a
      href={link}
      className="w-auto rounded-md transform hover:scale-105 flex flex-col group transition-transform"
    >
      {easter_egg ? (
        <>
          <div className="text-rotate group-hover:hidden">{parts}</div>
          <div className="text-rotate hidden group-hover:block">
            {partsEasterEgg}
          </div>
        </>
      ) : (
        <div className="text-rotate">{parts}</div>
      )}
      <img
        src={photo}
        className="w-60 object-cover aspect-square rounded-full z-10"
        alt={photo}
      />
      <span className="w-min text-nowrap mx-auto mt-2 py-2 px-4 rounded-2xl bg-mto_gray">
        {name}
      </span>
    </a>
  );
};

export default LeaderCard;
