import { useState } from "react";

import agendaData from "./agenda_data.json";

import "./style.css";
import { formatDate3 } from "../../../utils";

type AgendaEvent = {
  name: string;
  link: string;
  description?: {
    content: string;
    link: string;
    link_title: string;
  };
  dates?: {
    title: string;
    date: string;
    items: string[];
  }[];
};

function Agenda() {
  let query = new URLSearchParams(window.location.search).get("team");
  if (!query || !["dev", "iot", "net", "os", "sec"].includes(query)) {
    query = "dev";
  }

  const [team, setTeam] = useState<"dev" | "iot" | "net" | "os" | "sec">(
    query as "dev" | "iot" | "net" | "os" | "sec"
  );
  const data = agendaData[team] as { events: AgendaEvent[] };

  const onClick = (newTeam: "dev" | "iot" | "net" | "os" | "sec") => {
    setTeam(newTeam);
  };

  return (
    <div className="w-full min-h-dvh flex flex-col items-center px-4 mt-14 lg:w-2/3 2xl:w-1/2">
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
      <div className="flex flex-col w-5/6 items-start lg:w-3/4 pt-4">
        <div className="up-gradient flex gap-4 items-center">
          <div className="flex flex-col items-center min-h-28">
            <div className="w-4 h-1 rounded-full"></div>
            <div className="w-1 flex-1 bg-mto_red"></div>
          </div>
          <div className="font-main_sans text-white font-bold select-none">
            📎 Muy pronto más
          </div>
        </div>
        {data.events.map((event, index) => (
          <div className="flex gap-4">
            <div className="flex flex-col items-center min-h-28">
              <div className="w-4 h-4 rounded-full bg-mto_red"></div>
              <div className="w-1 flex-1 bg-mto_red rounded-b-sm"></div>
            </div>
            <div className="flex flex-col gap-4 text-white pb-14">
              <a
                href={event.link}
                className="font-main_sans font-bold text-lg relative -top-2 hover:text-gray-300 transition-colors"
              >
                📎 {event.name}
              </a>
              {event.description && (
                <div className="flex flex-col p-4 bg-white/5 rounded-lg">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event.description.content,
                    }}
                    className="text-pretty"
                  ></p>
                  <a
                    className="mt-4 w-min px-4 py-1 text-nowrap bg-mto_blue text-white font-bold rounded-2xl"
                    href={event.description.link}
                  >
                    {event.description.link_title} →
                  </a>
                </div>
              )}
              {event.dates &&
                event.dates?.map((date, index) => (
                  <div className="flex flex-col p-4 bg-white/5 rounded-lg">
                    <div className="flex gap-2 items-end font-lora">
                      <h4 className="font-bold">{date.title}</h4>
                      <span className="text-sm text-gray-400">
                        {formatDate3(new Date(date.date))}
                      </span>
                    </div>
                    <ul className="list-disc pl-4 font-lora">
                      {date.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-pretty"
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agenda;
