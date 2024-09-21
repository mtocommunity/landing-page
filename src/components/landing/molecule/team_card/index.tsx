import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faMinus,
  faPlus,
  faSlash,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import Button from "../../../general/attoms/button";
import { ButtonType } from "../../../general/attoms/button/types";

type TeamCardProps = {
  image: string;
  title: string;
  description: string;
  icon: IconProp;
  extended?: boolean;
  onClick?: () => void;
  link?: string;
};

function TeamCard({
  image,
  title,
  description,
  icon,
  extended = false,
  onClick,
  link,
}: TeamCardProps) {
  return (
    <div className={`team-card ${extended ? "team-card-extend" : ""} team-card-shadow`}>
      <div className="flex-1 relative cursor-pointer" onClick={onClick}>
        <div className="w-full">
          <img src={image} alt={image} className={`team-card-img`} />
        </div>
        <div
          className={`absolute top-0 w-full h-full lg:h-auto flex justify-between px-4 transition-colors duration-500 ${
            extended ? "bg-none" : "bg-black bg-opacity-50"
          } lg:relative lg:flex-col lg:h-80 lg:items-center`}
        >
          <div
            className={`flex gap-4 mt-[50px] -translate-y-1/2 transition-opacity h-min ${
              extended ? "opacity-0" : "opacity-100"
            } lg:flex-col lg:mt-36`}
          >
            <FontAwesomeIcon icon={icon} className="text-4xl" />
            <h3 className="text-xl font-main_sans">{title}</h3>
          </div>
          <FontAwesomeIcon
            icon={extended ? faMinus : faPlus}
            className={`transition-all p-2 border-white border rounded-full text-sm duration-500 mt-4 lg:w-4 lg:h-4 lg:mb-4 ${
              extended ? "bg-white text-black z-20" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`flex flex-col items-center py-4 justify-between h-full bg-mto_dark_gray lg:absolute lg:bottom-16 lg:h-64 lg:transition-opacity lg:duration-500 lg:pb-0 ${
          extended ? "lg:opacity-100" : "lg:opacity-0"
        }`}
      >
        <div className="flex gap-3 h-1/3 items-end">
          <FontAwesomeIcon icon={icon} className="text-5xl" />
          <h3 className="text-3xl font-main_sans">{title}</h3>
        </div>
        <p className="text-base font-light px-4 text-center lg:px-16 xl:px-24">
          {description}
        </p>
        <Button
          type={ButtonType.PRIMARY}
          link={link}
          className="flex items-center gap-2 py-2 rounded-md"
        >
          <FontAwesomeIcon icon={faTerminal} />
          <span>El equipo</span>
        </Button>
      </div>
    </div>
  );
}

export default TeamCard;
