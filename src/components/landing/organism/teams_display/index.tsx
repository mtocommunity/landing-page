import React from "react";
import TeamCard from "../../molecule/team_card";

import { landing_iot, landing_os, landing_sec } from "../../../../assets";
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
    <div className="flex flex-col w-full lg:flex-row">
      <TeamCard
        title="Dev Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, sed etiam, sed etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        icon={faLaptopCode}
        image={landing_sec}
        extended={focus === 0}
        onClick={() => handleOnClick(0)}
        link="/team/dev"
      />
      <TeamCard
        title="Net Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, sed etiam, sed etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        icon={faNetworkWired}
        image={landing_iot}
        extended={focus === 1}
        onClick={() => handleOnClick(1)}
        link="/team/net"
      />
      <TeamCard
        title="OS Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, sed etiam, sed etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        icon={faLinux}
        image={landing_os}
        extended={focus === 2}
        onClick={() => handleOnClick(2)}
        link="/team/os"
      />
      <TeamCard
        title="Sec Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, sed etiam, sed etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        icon={faRedhat}
        image={landing_sec}
        extended={focus === 3}
        onClick={() => handleOnClick(3)}
        link="/team/security"
      />
      <TeamCard
        title="IoT Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, sed etiam, sed etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
