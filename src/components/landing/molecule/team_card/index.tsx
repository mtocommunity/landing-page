import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import Button from "../../../general/attoms/button";
import { ButtonType } from "../../../general/attoms/button/types";
import {
  faLaptopCode,
  faNetworkWired,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinux, faRedhat } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

type TeamCardProps = {
  team: "dev" | "iot" | "net" | "os" | "sec";
  className?: string;
};

const icons = {
  dev: faLaptopCode,
  iot: faRobot,
  net: faNetworkWired,
  os: faLinux,
  sec: faRedhat,
};

const colors = {
  dev: "mto_red",
  iot: "mto_blue",
  net: "mto_red",
  os: "mto_gray",
  sec: "mto_gray",
};

const teamDescription = {
  dev: "Nuestro equipo de desarrollo se enfoca en el desarrollo web y de software. Aquí puedes aprender sobre programación, frameworks modernos, y buenas prácticas de desarrollo.",
  iot: "El equipo de Internet de las Cosas se encarga de gestionar proyectos de robótica, los cuales son interactivos, creativos e innovadores.",
  net: "El equipo de redes se centra en todo lo relacionado con redes y comunicaciones. Trabajan en la configuración y gestión de redes, así como en la resolución de problemas de conectividad.",
  os: "Este equipo está dedicado a sistemas operativos y administración de sistemas. Se especializan en el manejo de diferentes sistemas operativos,  configuración y administración.",
  sec: "Nuestro equipo de ciberseguridad trabaja en la protección de sistemas y datos contra amenazas y ataques. Aquí aprenderás sobre seguridad informática, análisis de vulnerabilidades y mejores prácticas de protección.",
};

function TeamCard({ team, className }: TeamCardProps) {
  const [reverse, setReverse] = useState(false);

  const onClick = () => {
    setReverse(!reverse);
  };

  return (
    <div
      className={`team-card cursor-pointer aspect-square bg-gradient-to-tr from-${colors[team]} from-70% to-mto_dark_gray p-[2px] rounded-xl w-full relative ${className} ${reverse ? "team-card-reverse" : ""}`}
      onClick={onClick}
    >
      <div
        className={`bg-black flex flex-col items-center justify-center bg-gradient-to-br to-${colors[team]}/10 from-black rounded-xl absolute`}
      >
        <FontAwesomeIcon icon={icons[team]} className="w-[5rem] text-[5rem]" />
        <span className="font-bold text-center">
          {team.toUpperCase()}-TEAM
          {["os", "sec"].indexOf(team) === -1 ? null : (
            <>
              <br />{" "}
              <span className="lg:text-xs 2xl:text-sm">
                (Inactivo temporalmente)
              </span>
            </>
          )}
        </span>
      </div>
      <div
        className={`bg-black flex flex-col gap-6 items-center justify-center bg-gradient-to-br to-${colors[team]}/10 from-black rounded-xl absolute reverse`}
      >
        <span className="font-bold">{team.toUpperCase()}-TEAM</span>
        <p className="px-5 text-center lg:text-xs 2xl:text-sm">
          {teamDescription[team]}
        </p>
        <Button type={ButtonType.PRIMARY} link={`/team/${team}`}>
          Ver recursos
        </Button>
      </div>
    </div>
  );
}

export default TeamCard;
