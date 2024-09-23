import React from "react";
import TeamCard from "../../molecule/team_card";

import {
  landing_dev,
  landing_iot,
  landing_net,
  landing_os,
  landing_sec,
} from "../../../../assets";
import { faLinux, faRedhat } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faComputer,
  faLaptopCode,
  faNetworkWired,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

function TeamsDisplay() {
  const [focus, setFocus] = React.useState(0);

  const handleOnClick = (index: number) => {
    setFocus((i) => (i === index ? -1 : index));
  };

  return (
    <div className="flex flex-col w-full lg:flex-row" id="teams">
      <TeamCard
        title="Dev-Team"
        description="Nuestro equipo de desarrollo se enfoca en el desarrollo web y de software. 
                    Aquí puedes aprender sobre programación, frameworks modernos, y buenas prácticas de desarrollo."
        icon={faLaptopCode}
        image={landing_dev}
        extended={focus === 0}
        onClick={() => handleOnClick(0)}
        link="/team/dev"
      />
      <TeamCard
        title="Net-Team"
        description="El equipo de redes se centra en todo lo relacionado con redes y comunicaciones. 
                    Trabajan en la configuración y gestión de redes, así como en la resolución de problemas de conectividad."
        icon={faNetworkWired}
        image={landing_net}
        extended={focus === 1}
        onClick={() => handleOnClick(1)}
        link="/team/net"
      />
      <TeamCard
        title="OS-Team"
        description="Este equipo está dedicado a sistemas operativos y administración de sistemas. 
                    Se especializan en el manejo de diferentes sistemas operativos, su configuración y administración."
        icon={faLinux}
        image={landing_os}
        extended={focus === 2}
        onClick={() => handleOnClick(2)}
        link="/team/os"
      />
      <TeamCard
        title="Sec-Team"
        description="Nuestro equipo de ciberseguridad trabaja en la protección de sistemas y datos contra amenazas y ataques. 
                    Aquí aprenderás sobre seguridad informática, análisis de vulnerabilidades y mejores prácticas de protección."
        icon={faRedhat}
        image={landing_sec}
        extended={focus === 3}
        onClick={() => handleOnClick(3)}
        link="/team/security"
      />
      <TeamCard
        title="IoT-Team"
        description="El equipo de Internet de las Cosas se encarga de gestionar proyectos de robótica, los cuales son interactivos, creativos e innovadores."
        icon={faRobot}
        image={landing_iot}
        extended={focus === 4}
        onClick={() => handleOnClick(4)}
        link="/team/iot"
      />
    </div>
  );
}

export default TeamsDisplay;
