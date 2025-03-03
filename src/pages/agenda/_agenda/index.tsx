import { useState } from "react";

import agendaData from "./agenda_data.json";

import "./style.css";

function Agenda() {
  const [team, setTeam] = useState<"dev" | "iot" | "net" | "os" | "sec">("dev");
  const data = agendaData[team];

  const onClick = (newTeam: "dev" | "iot" | "net" | "os" | "sec") => {
    setTeam(newTeam);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 mt-14 lg:w-2/3 2xl:w-1/2">
      <div className="w-full flex p-2 bg-gray-600/50 justify-between">
        <button
          className={`team-button ${team === "dev" ? "team-button-active" : ""}`}
          onClick={() => onClick("dev")}
        >
          <span>DEV</span>
          <span className="hidden lg:inline-block">Team</span>
        </button>
        <button
          className={`team-button ${team === "iot" ? "team-button-active" : ""}`}
          onClick={() => onClick("iot")}
        >
          <span>IOT</span>
          <span className="hidden lg:inline-block">Team</span>
        </button>
        <button
          className={`team-button ${team === "net" ? "team-button-active" : ""}`}
          onClick={() => onClick("net")}
        >
          <span>NET</span>
          <span className="hidden lg:inline-block">Team</span>
        </button>
        <button
          className={`team-button ${team === "os" ? "team-button-active" : ""}`}
          onClick={() => onClick("os")}
        >
          <span>OS</span>
          <span className="hidden lg:inline-block">Team</span>
        </button>
        <button
          className={`team-button ${team === "sec" ? "team-button-active" : ""}`}
          onClick={() => onClick("sec")}
        >
          <span>SEC</span>
          <span className="hidden lg:inline-block">Team</span>
        </button>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
}

export default Agenda;
